import { KOCEvent } from '@/types';
import { EventEmitter, EventUnsubscribe } from './event_emitter';

export type Connection = {
  onMessage: (callback: (data: string) => void) => void;
  send: (data: string) => Promise<void>;
};

type OfUnion<T extends KOCEvent> = {
  [P in T['type']]: Extract<T, { type: P }>;
};

type EmitterEvents<T extends KOCEvent> = {
  [K in keyof OfUnion<T>]: (event: OfUnion<T>[K]) => void;
};

export class KOCWebsocketWrapper<ReceiveEvents extends KOCEvent, EmitEvents extends KOCEvent> {
  /**
   * The Event Emitter that handles all Event related operations.
   */
  private emitter: EventEmitter<EmitterEvents<ReceiveEvents>> = new EventEmitter();

  private connection: Connection | undefined;

  /**
   *
   * @param connection The connection to communicate with.
   *                   If not provided, you must attach a connection later using {@link attachConnection}.
   */
  constructor(connection?: Connection) {
    if (connection) {
      this.attachConnection(connection);
    }
  }

  public attachConnection(connection: Connection) {
    if (this.connection) {
      throw new Error('Connection already attached.');
    }

    this.connection = connection;
    this.connection.onMessage((data) => {
      const message: unknown = JSON.parse(data);

      if (typeof message !== 'object') {
        return;
      }

      if (message === null) {
        return;
      }

      if (!('type' in message)) {
        return;
      }

      (this.emitter.emit as any)(message.type, message);
    });
  }

  public detachConnection() {
    this.connection = undefined;
  }

  /**
   * Add a listener for a given event.
   *
   * @param event The event type to listen to.
   * @param callback The callback when the event is emitted.
   *
   * @returns Unbind listener from event.
   */
  public on<Event extends keyof EmitterEvents<ReceiveEvents>>(
    event: Event,
    callback: EmitterEvents<ReceiveEvents>[Event],
  ): EventUnsubscribe {
    return this.emitter.on(event, callback);
  }

  /**
   * Add a listener for a given event that only gets invoked once.
   *
   * @param event The event type to listen to.
   * @param callback The callback when the event is emitted.
   *
   * @returns Unbind listener from event.
   */
  public once<Event extends keyof EmitterEvents<ReceiveEvents>>(
    event: Event,
    callback: EmitterEvents<ReceiveEvents>[Event],
  ): EventUnsubscribe {
    const unbind = this.emitter.on(event, (data: any) => {
      unbind();
      callback(data);
    });
    return unbind;
  }

  /**
   * Emit a client event to the Knockout City Server.
   *
   * @param event The event to emit.
   *
   * @returns A Promise that resolves when the Event has successfully been emitted.
   */
  public async emit(event: EmitEvents): Promise<void> {
    return this.connection?.send(JSON.stringify(event));
  }
}
