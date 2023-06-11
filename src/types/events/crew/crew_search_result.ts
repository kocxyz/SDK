import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

/**
 * Contains the search result of the
 * `_crew_request_info` client event.
 */
export type KOCCrewsSearchResultServerEvent = KOCEvent & {
  type: '_crew_search_results';
  users: { user_id: KOCUserId }[];
  crews: unknown[];
};
