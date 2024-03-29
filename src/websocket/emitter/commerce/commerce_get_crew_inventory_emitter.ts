import { KOCClientEmitter } from '@/websocket/emitter/emitter';

export const emitCommerceGetCrewInventory: KOCClientEmitter<void> = (client) =>
  client.emit({
    type: '_commerce_get_crew_inventory',
  });
