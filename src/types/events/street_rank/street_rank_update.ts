import { KOCEvent } from "../event"

export type KOCStreetRankUpdateServerEvent = KOCEvent & {
  type: '_street_rank_update',
  update: {
    // TODO: What does the left represent since I am not level 1
    '1': number
  }
}