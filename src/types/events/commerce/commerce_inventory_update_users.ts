import type { KOCCommerceCrewInventoryEquipment, KOCCommerceInventoryEquipment } from '@/types/commerce';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId, UUID4Seg, UUID5Seg } from '@/types/id';

export type KOCCommerceInventoryUpdateUsersServerEvent = KOCEvent & {
  type: '_commerce_inventory_update_users';
  is_full_update: boolean;
  incremental: boolean;
  full_update_done: boolean;
  users: KOCCommerceInventoryUpdateUser[];
};

type KOCCommerceInventoryUpdateUser = {
  user_id: KOCUserId;
  equipment: Partial<KOCCommerceInventoryEquipment & KOCCommerceCrewInventoryEquipment>;
  consumables: KOCCommerceInventoryUpdateUsersConsumable[];
  durables: UUID4Seg[];
  favourites: number;
};

export type KOCCommerceInventoryUpdateUsersConsumable = {
  itemDefAlias: UUID4Seg;
  itemId: UUID5Seg;
  itemCount: number;
};
