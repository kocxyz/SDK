import { KOCEvent } from "../event"

export type KOCGroupKickedServerEvent = KOCEvent & {
  type: '_kicked_from_group'
}
