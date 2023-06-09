import { KOCEvent } from "../event"

/**
 * An event that can be used to create a crew
 */
export type KOCCrewsCreateClientEvent = KOCEvent & {
  type: '_crews_create',
  name: string
}