import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is used to unblock a player.
 */
export type KOCUnblockPlayerClientEvent = KOCEvent & {
  type: '_unblock_player';
  /**
   * The User Id who to unblock.
   */
  user_id: KOCUserId;
};
