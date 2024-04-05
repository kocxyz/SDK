import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * Contains the search result of the
 * `_crew_request_info` client event.
 */
export type KOCCrewsSearchResultServerEvent = KOCEvent & {
  type: '_crew_search_results';
  users: { user_id: KOCUserId }[];
  crews: unknown[];
};
