import type { KOCCrew } from '@/types/crew';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCBaseUser } from '@/types/user';

/**
 * Contains the search result of the
 * `_crew_request_info` client event.
 */
export type KOCCrewsSearchResultServerEvent = KOCEvent & {
  type: '_crew_search_results';
  users: { user_id: KOCUserId }[];
  crews: (KOCCrew & { crew_members: KOCBaseUser[] })[];
};
