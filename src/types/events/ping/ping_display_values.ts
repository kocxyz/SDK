import type { KOCEvent } from '@/types/events/event';
import type { UUID5Seg } from '@/types/id';

export type KOCPingDisplayRegion = {
  uuid: UUID5Seg;
  ping_str: `${number}`;
};

export type KOCPingDisplayValuesServerEvent = KOCEvent & {
  type: '_ping_display_values';
  regions: KOCPingDisplayRegion[];
};
