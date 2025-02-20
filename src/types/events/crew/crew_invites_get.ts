import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCUser } from '@/types/user';

export type KOCCrewInvitesGetServerEvent = KOCEvent & {
  type: '_crew_invites_get';
  full_update: boolean;
  full_list: boolean;
  /**
   * An Array of Users from whom invites exist.
   */
  update?: KOCUser[];
  /**
   * An Array of UserId's from whom to remove the invites.
   */
  remove?: KOCUserId[];
};
