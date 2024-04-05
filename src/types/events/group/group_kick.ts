import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is used to join a group.
 *
 * Also used for leaving the group (emit with own user id)
 */
export type KOCGroupKickClientEvent = KOCEvent & {
  type: '_group_kick';
  /**
   * The User Id who's group to join.
   */
  user_id: KOCUserId;
};
