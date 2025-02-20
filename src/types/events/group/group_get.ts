import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCUser } from '@/types/user';

export type KOCGroupGetServerEvent = KOCEvent & {
  type: '_group_get';
  full_update: boolean;
  full_list: boolean;
  /**
   * The UserId of the group leader
   */
  group_leader: KOCUserId;
  update: KOCUser[];
};
