import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that can be used to request to join
 * a crew.
 */
export type KOCCrewsSendJoinRequestClientEvent = KOCEvent & {
  type: '_crews_send_join_request',
  user_id: KOCUserId
}