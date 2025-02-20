import type { KOCEvent } from '@/types/events/event';

export type KOCGameServerCancelledNewPlayerRequestGameServerEvent = KOCEvent & {
  type: '_game_server_cancelled_new_player_request';
  cancel_all: boolean;
  team_id: number;
};
