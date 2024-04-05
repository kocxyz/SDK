import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is used to join a group.
 *
 * Also used for leaving the group (emit with own user id)
 */
export type KOCGroupJoinClientEvent = KOCEvent & {
  type: '_group_join';
  /**
   * The User Id who's group to join.
   */
  user_id: KOCUserId;
  /**
   * Wheather or not the join happend because
   * of an invite.
   */
  join_via_invite: boolean;
  /**
   * Wheather or not to merge groups.
   *
   * **Hint**: No clue what that does yet.
   */
  merge_group: boolean;
};
