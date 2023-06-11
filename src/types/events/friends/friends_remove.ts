import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

/**
 * An event that is used to remove a friend from
 * the friendslist.
 */
export type KOCFriendsRemoveClientEvent = KOCEvent & {
  type: '_friends_remove';
  /**
   * The User Id whoto remove.
   */
  friend_user_id: KOCUserId;
};
