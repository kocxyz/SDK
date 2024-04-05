import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is used to send a friend request.
 */
export type KOCFriendsSendRequestClientEvent = KOCEvent & {
  type: '_friends_send_request';
  /**
   * The User Id whoto send the request to.
   */
  recipient: KOCUserId;
};
