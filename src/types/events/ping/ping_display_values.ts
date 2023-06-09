import { UUID } from "crypto"
import { KOCEvent } from "../event"

export type KOCPingDisplayRegion = {
  uuid: UUID,
  ping_str: `${number}`
}

export type KOCPingDisplayValuesServerEvent = KOCEvent & {
  type: '_ping_display_values',
  regions: KOCPingDisplayRegion[]
}