import type { KOCEvent } from '@/types/events/event';

export type KOCServerTimeDeltaGameServerEvent = KOCEvent & {
  type: '_server_time_delta';
  time_delta_seconds: number;
};
