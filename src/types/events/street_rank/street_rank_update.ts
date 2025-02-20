import type { KOCEvent } from '@/types/events/event';

type KOCStreetRankUpdateEvent = KOCEvent & {
  type: '_street_rank_update';
  update: {
    /**
     * The key represents the Users ID.
     * The value represents the total xp.
     */
    [key: `${number}`]: number;
  };
};

export type KOCStreetRankUpdateServerEvent = KOCStreetRankUpdateEvent;
export type KOCStreetRankUpdateGameServerEvent = KOCStreetRankUpdateEvent;
