import type { KOCEvent } from '@/types/events/event';
import type { KOCUser } from '@/types/user';

export type KOCCrewJoinRequestsGetServerEvent = KOCEvent & {
  type: '_crew_join_requests_get';
  full_update: boolean;
  full_list: boolean;
  /**
   * An Array of Users from whom invites exist.
   */
  update: KOCUser[];
};
