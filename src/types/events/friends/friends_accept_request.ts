import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is used to accept a friend request.
 */
export type KOCFriendsAcceptRequestClientEvent = KOCEvent & {
  type: '_friends_accept_request';
  /**
   * The User Id who's request to accept.
   */
  friend_user_id: KOCUserId;
};
