import { KOCEmitter } from '../emitter';

export const emitCrewLeave: KOCEmitter<void> = (client) =>
  client.emit({
    type: '_crews_leave',
  });
