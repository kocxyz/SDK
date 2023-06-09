import { KOCEvent } from "../event"

export type KOCStreetRankUpdateServerEvent = KOCEvent & {
  type: '_street_rank_update',
  update: {
    /**
     * The key represents the Users ID.
     * The value represents the total xp.
     */
    [key: `${number}`]: number,
  }
}