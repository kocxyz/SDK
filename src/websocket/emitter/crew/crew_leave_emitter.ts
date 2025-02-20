import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

export const emitCrewLeave: KOCClientEmitter<void> = (client) =>
  client.emit({
    type: '_crews_leave',
  });
