import { KOCEmitter } from "../emitter";
import { KOCCommerceInventoryEquipment } from "../../../types/commerce";

type EmitterCommerceInventoryEquipParameters = {
  userId: number,
  equipment: Partial<KOCCommerceInventoryEquipment>
}

export const emitCommerceInventoryEquip: KOCEmitter<EmitterCommerceInventoryEquipParameters> = (client, params) => client.emit({
  type: '_commerce_inventory_equip',
  user_id: {
    velan: params.userId,
  },
  allow_unowned: false,
  equipment: params.equipment
})