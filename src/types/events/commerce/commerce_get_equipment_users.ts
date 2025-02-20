import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

export type KOCCommerceGetEquipmentUsersClientEvent = KOCEvent & {
  type: '_commerce_get_equipment_users';
  users: {
    user_id: KOCUserId;
  }[];
};
