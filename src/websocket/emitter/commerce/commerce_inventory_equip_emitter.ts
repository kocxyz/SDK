import type { KOCCommerceInventoryEquipment } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCommerceInventoryEquipParameters = {
  userId: number;
  equipment: Partial<KOCCommerceInventoryEquipment>;
};

export const emitCommerceInventoryEquip: KOCClientEmitter<EmitterCommerceInventoryEquipParameters> = (client, params) =>
  client.emit({
    type: '_commerce_inventory_equip',
    user_id: {
      velan: params.userId,
    },
    allow_unowned: false,
    equipment: params.equipment,
  });
