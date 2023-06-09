import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that can be used to invite a
 * user to the crew.
 */
export type KOCCrewsSendInviteClientEvent = KOCEvent & {
  type: '_crews_send_invite',
  user_id: KOCUserId
}