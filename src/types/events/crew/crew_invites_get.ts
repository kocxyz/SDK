import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

export type KOCCrewInvitesGetServerEvent = KOCEvent & {
  type: '_crew_invites_get';
  full_update: boolean;
  full_list: boolean;
  // either update or remove
  // looks like an array of user stuff with crew attached
  /**
   * An Array of Users from whom invites exist.
   */
  update?: unknown[];
  /**
   * An Array of UserId's from whom to remove the invites.
   */
  remove?: KOCUserId[];
};
