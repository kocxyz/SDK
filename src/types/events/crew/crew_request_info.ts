import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

/**
 * An event that can be used to request crew
 * information for the specified users.
 * 
 * Response will be sent via the `_crew_search_result`
 * server event.
 */
export type KOCCrewRequestInfoClientEvent = KOCEvent & {
  type: '_crews_request_info',
  users: { user_id: KOCUserId }[]
}