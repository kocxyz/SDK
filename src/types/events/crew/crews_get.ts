import { KOCEvent } from "../event"

export type KOCCrewsGetServerEvent = KOCEvent & {
  type: "_crews_get",
  is_in_crew: boolean
}