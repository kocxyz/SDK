import { KOCEvent } from "../event"

/**
 * An event that can be used to rename a crew.
 * 
 * An update for the crew will be sent via
 * the `_crews_get` server event when successful.
 */
export type KOCCrewsChangeNameClientEvent = KOCEvent & {
  type: '_crews_change_name',
  name: string
}