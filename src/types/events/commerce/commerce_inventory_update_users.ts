import { KOCEvent } from '../event';
import { KOCUserId } from '../../user';
import { KOCCommerceInventoryConsumable, KOCCommerceInventoryEquipment, KOCDatabaseId } from '@/types';

export type KOCCommerceInventoryUpdateUsersServerEvent = KOCEvent & {
  type: '_commerce_inventory_update_users';
  is_full_update: boolean;
  incremental: boolean;
  full_update_done: boolean;
  users: KOCCommerceInventoryUpdateUser[];
};

type KOCCommerceInventoryUpdateUser = {
  user_id: KOCUserId;
  equipment: KOCCommerceInventoryEquipment;
  consumables: KOCCommerceInventoryConsumable[];
  durables: KOCDatabaseId[];
  favourites: number;
};
