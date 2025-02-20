import type { KOCEvent } from '@/types/events/event';

export type KOCMatchmakingCanceledServerEvent = KOCEvent & {
  type: '_matchmaking_canceled';
  status: 4;
  debug_status: string;
};
