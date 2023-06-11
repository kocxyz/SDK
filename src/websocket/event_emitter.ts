type EventsMap = {
  [event: string]: any;
};

export type EventUnsubscribe = {
  (): void;
};

export class EventEmitter<Events extends EventsMap> {
  private events: Partial<{ [E in keyof Events]: Events[E][] }> = {};

  /**
   * Add an event listener.
   *
   * @param event The type of event.
   * @param callback The listener function.
   * @returns Unbind listener from event.
   */
  public on<K extends keyof Events>(event: K, callback: Events[K]): EventUnsubscribe {
    if (this.events[event] === undefined) {
      this.events[event] = [callback];
    } else {
      this.events[event]!.push(callback);
    }

    return () => {
      this.events[event] = this.events[event]?.filter((index) => callback !== index);
    };
  }

  /**
   * Emit an event.
   *
   * @param event The type of event.
   * @param args The event parameters.
   */
  public emit<K extends keyof Events>(event: K, ...args: Parameters<Events[K]>): void {
    const callbacks = this.events[event] || [];
    callbacks.forEach((callback) => {
      callback(...args);
    });
  }
}
