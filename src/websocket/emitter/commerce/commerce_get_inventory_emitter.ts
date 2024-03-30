import { KOCClientEmitter } from '@/websocket/emitter/emitter';

export const emitCommerceGetInventory: KOCClientEmitter<void> = (client) =>
  client.emit({
    type: '_commerce_get_inventory',
  });
