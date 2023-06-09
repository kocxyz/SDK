import { UUID } from "crypto"
import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that can be used to accept a crew invite.
 */
export type KOCCrewsAcceptInviteClientEvent = KOCEvent & {
  type: '_crews_accept_invite',
  /**
   * The Id of the User who sent the invite.
   */
  user_id: KOCUserId
  /**
   * The UUID of the crew to join
   */
  crew_guid: UUID
}