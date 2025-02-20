import type { KOCCommerceCrewInventoryEquipment } from '@/types/commerce';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

/**
 * An event that can be used to equip an non-consumable crew item
 * like vehicle, banner, horn.
 */
export type KOCCommerceCrewInventoryEquipClientEvent = KOCEvent & {
  type: '_commerce_crew_inventory_equip';
  user_id: KOCUserId;
  equipment: Partial<KOCCommerceCrewInventoryEquipment>;
};
