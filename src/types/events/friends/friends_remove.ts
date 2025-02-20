import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

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
