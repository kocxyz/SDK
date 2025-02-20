type EventsMap = {
  // biome-ignore lint/suspicious/noExplicitAny: Fix this at a later time.
  [event: string]: (...args: any[]) => void;
};

export type EventUnsubscribe = () => void;

export class EventEmitter<Events extends EventsMap> {
  private events: Partial<{ [E in keyof Events]: Events[E][] }> = {};

  /**
   * Fallback event listener.
   */
  private fallback: EventsMap[string] = () => {};

  /**
   * Add a listener for any event that has no listener registered.
   *
   * @param callback The callback.
   *
   * @returns Unbind listener from event.
   */
  public onOther(callback: EventsMap[string]): EventUnsubscribe {
    this.fallback = callback;

    return () => {
      this.fallback = () => {};
    };
  }

  /**
   * Add an event listener.
   *
   * @param event The type of event.
   * @param callback The listener function.
   * @returns Unbind listener from event.
   */
  public on<K extends keyof Events>(event: K, callback: Events[K]): EventUnsubscribe {
    if (this.events[event] === undefined) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

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
    const callbacks = this.events[event] ?? [this.fallback];
    for (const callback of callbacks) {
      callback(...args);
    }
  }
}
