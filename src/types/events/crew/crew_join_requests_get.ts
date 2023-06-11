import { KOCEvent } from '../event';

export type KOCCrewJoinRequestsGetServerEvent = KOCEvent & {
  type: '_crew_join_requests_get';
  full_update: boolean;
  full_list: boolean;
  // either update or remove
  // looks like an array of user stuff without crew attached
  /**
   * An Array of Users from whom invites exist.
   */
  update: unknown[];
};
