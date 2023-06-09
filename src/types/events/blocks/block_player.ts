import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that is used to block a player.
 */
export type KOCBlockPlayerClientEvent = KOCEvent & {
  type: '_block_player',
  /**
   * The User Id who to block.
   */
  user_id: KOCUserId,
}