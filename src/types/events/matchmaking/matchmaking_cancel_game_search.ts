import { KOCEvent } from '@/types';

export type KOCMatchmakingCancelGameSearchClientEvent = KOCEvent & {
  type: '_matchmaking_cancel_game_search';
  duration: number;
};
