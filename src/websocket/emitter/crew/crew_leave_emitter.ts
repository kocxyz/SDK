import { KOCEmitter } from '@/websocket/emitter/emitter';

export const emitCrewLeave: KOCEmitter<void> = (client) =>
  client.emit({
    type: '_crews_leave',
  });
