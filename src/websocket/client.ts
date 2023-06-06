import { UUID } from 'crypto';
import { client as WebsocketClient, connection as Connection } from 'websocket';

import type { KOCServerUrl } from '../types/connection';
import type { KOCClientEvent, KOCEvent, KOCServerEvent } from '../types/events';
import { EventEmitter } from './event_emitter'
import { emitUserPingData, emitUserPresence } from './emitter';

type OfUnion<T extends KOCEvent> = {
  [P in T['type']]: Extract<T, { type: P }>
}

type EmitterEvents<T extends KOCEvent> = {
  [K in keyof OfUnion<T>]: (event: OfUnion<T>[K]) => void
}

export class KOCWebsocketClient {
  /**
   * The Websocket Client that connects to the Knockout City Server.
   */
  private client: WebsocketClient = new WebsocketClient();
  /**
   * The connection to the server if it exists.
   * If undefined the client is not connected to the server.
   */
  private connection: Connection | undefined = undefined;
  /**
   * The address to the Knockout City Server.
   */
  private address: KOCServerUrl;

  /**
   * The Session ID for the client.
   */
  private gameSessionId: UUID;

  /**
   * The Game Executable Version
   */
  private gameExecutableVersion = '269701';

  /**
   * The Game Version
   */
  private gameVersion = '269701';

  /**
   * The Game Generation Version
   */
  private gameGeneration = '2';

  /**
   * The Event Emitter that handles all Event related operations.
   */
  private emitter: EventEmitter<EmitterEvents<KOCServerEvent>> = new EventEmitter();

  /**
   * @param address The address of the Knockout City Server.
   * @param gameSessionId The Session Id of the client. (Default: Random generated)
   */
  constructor(address: KOCServerUrl, gameSessionId: UUID = crypto.randomUUID()) {
    this.address = address;
    this.gameSessionId = gameSessionId;
  }

  /**
   * Add a listener for a given event.
   * 
   * @param event The event type to listen to.
   * @param callback The callback when the event is emitted.
   * 
   * @returns Unbind listener from event.
   */
  public on<Event extends keyof EmitterEvents<KOCServerEvent>>(event: Event, callback: EmitterEvents<KOCServerEvent>[Event]) {
    return this.emitter.on(event, callback)
  }

  /**
   * Emit a client event to the Knockout City Server.
   * 
   * @param event The event to emit.
   * 
   * @returns A Promise that resolves when the Event has successfully been emitted.
   */
  public emit(event: KOCClientEvent): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        return reject('Not connected. Please connect first.');
      }

      this.connection.sendUTF(
        JSON.stringify(event),
        () => resolve(),
      );
    });
  }

  /**
   * Connect to the Server.
   *
   * @param token The bearer token to authenticate against the server with.
   */
  public connect(token: String): Promise<void> {
    const headers = {
      Authorization: `Bearer ${token}`,
      'game-executable-version': this.gameExecutableVersion,
      'game-version': this.gameVersion,
      'game-generation': this.gameGeneration,
      'game-client-session': this.gameSessionId,
      'game-reconnect': 0,
      'game-content-update-version': '',
      'accept-language': 'en',
    };

    return new Promise((resolve) => {
      this.client.on('connect', (connection) => {
        this.connection = connection;

        setInterval(async () => {
          await emitUserPingData(this, { regions: [] });
          await emitUserPresence(this, { presenceState: 5, richPresenceState: 0 });
        }, 10000);

        connection.on('message', (data) => {
          if (data.type === 'utf8') {
            const message: unknown = JSON.parse(data.utf8Data)

            // Check if message is of type object
            if (typeof message !== 'object') {
              return;
            }

            // Check if message exists
            if (message === null) {
              return;
            }

            // Check if message has a 'type'
            // if not the message is unknown to us
            // and we don't care for now.
            if (!('type' in message)) {
              return;
            }

            this.emitter.emit(message.type as any, message)
          }
        });

        resolve();
      });

      this.client.connect(`${this.address}/`, [], undefined, headers);
    });
  }
}
