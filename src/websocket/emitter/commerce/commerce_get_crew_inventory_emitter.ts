import { KOCEmitter } from '@/websocket/emitter/emitter';

export const emitCommerceGetCrewInventory: KOCEmitter<void> = (client) =>
  client.emit({
    type: '_commerce_get_crew_inventory',
  });
