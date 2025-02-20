import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

/**
 * An event that is used to reject a friend request.
 */
export type KOCFriendsRejectRequestClientEvent = KOCEvent & {
  type: '_friends_reject_request';
  /**
   * The User Id who's request to reject.
   */
  friend_user_id: KOCUserId;
};
