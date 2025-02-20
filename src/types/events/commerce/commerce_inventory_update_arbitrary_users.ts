import type { KOCCommerceCrewInventoryEquipment, KOCCommerceInventoryEquipment } from '@/types/commerce';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

export type KOCCommerceInventoryUpdateArbitraryUsersServerEvent = KOCEvent & {
  type: '_commerce_inventory_update_arbitrary_users';
  users: {
    user_id: KOCUserId;
    equipment: Partial<KOCCommerceInventoryEquipment & KOCCommerceCrewInventoryEquipment>;
  }[];
};
