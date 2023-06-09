import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that can be used to reject a crew invite.
 */
export type KOCCrewsRejectInviteClientEvent = KOCEvent & {
  type: '_crews_reject_invite',
  /**
   * The Id of the User who sent the invite.
   */
  user_id: KOCUserId
}