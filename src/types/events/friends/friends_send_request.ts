import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

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
