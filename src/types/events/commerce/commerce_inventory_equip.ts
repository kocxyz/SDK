import { KOCCommerceInventoryEquipment } from '@/types/commerce';
import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that can be used to equip an non-consumable
 * like clothing, effects, animations.
 */
export type KOCCommerceInventoryEquipClientEvent = KOCEvent & {
  type: '_commerce_inventory_equip';
  user_id: KOCUserId;
  allow_unowned: false;
  equipment: Partial<KOCCommerceInventoryEquipment>;
};
