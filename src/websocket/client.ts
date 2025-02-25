import * as crypto from 'node:crypto';
import { type connection as Connection, client as WebsocketClient } from 'websocket';

import type { KOCClientEvent, KOCServerEvent, KOCWebsocketServerUrl, UUID5Seg } from '@/types';
import { adapterWebsocket } from '@/websocket/adapters';
import { KOCWebsocketWrapper } from '@/websocket/wrapper';

export class KOCWebsocketClient extends KOCWebsocketWrapper<KOCServerEvent, KOCClientEvent> {
  /**
   * The Websocket Client that connects to the Knockout City Server.
   */
  private client: WebsocketClient = new WebsocketClient();
  /**
   * The connection to the server if it exists.
   * If undefined the client is not connected to the server.
   */
  private wsConnection: Connection | undefined = undefined;

  /**
   * The address to the Knockout City Server.
   */
  private address: KOCWebsocketServerUrl;

  /**
   * The Session ID for the client.
   */
  private gameSessionId: UUID5Seg;

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
   * @param address The address of the Knockout City Server.
   * @param gameSessionId The Session Id of the client. (Default: Random generated)
   */
  constructor(address: KOCWebsocketServerUrl, gameSessionId: UUID5Seg = crypto.randomUUID()) {
    super();

    this.address = address;
    this.gameSessionId = gameSessionId;
  }

  /**
   * Disconnect from the Server.
   */
  public disconnect(): Promise<void> {
    if (!this.wsConnection) {
      throw Error('Not connected, connect first.');
    }

    return new Promise((resolve) => {
      if (!this.wsConnection) {
        throw Error('No longer connected, connect first.');
      }

      this.wsConnection.on('close', () => {
        this.wsConnection = undefined;
        resolve();
      });

      this.wsConnection.close();
    });
  }

  /**
   * Connect to the Server.
   *
   * @param token The bearer token to authenticate against the server with.
   */
  public connect(token: string): Promise<void> {
    if (this.wsConnection) {
      throw Error('Already connected, disconnect first.');
    }

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
        this.wsConnection = connection;
        this.attachConnection(adapterWebsocket(connection));

        connection.on('close', () => {
          this.wsConnection = undefined;
          this.detachConnection();
        });

        // Listen to the welcome event so we know the server
        // knows we are connected and we can start emitting
        // events as well
        this.once('_welcome', () => resolve());
      });

      this.client.connect(`${this.address}/`, [], undefined, headers);
    });
  }
}
