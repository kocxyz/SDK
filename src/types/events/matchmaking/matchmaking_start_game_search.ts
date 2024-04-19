import { KOCEvent } from '@/types/events/event';
import { KOCBallOverride, KOCMapOverride } from '@/types/events/gameserver/gameserver_configure';
import { UUID5Seg } from '@/types/id';
import { KOCServerPlaylistMatchFlow } from '@/types/playlist';

export type KOCMatchmakingStartGameSearchClientEvent = KOCEvent & {
  type: '_matchmaking_start_game_search';
  /**
   * The UUID of the server playlist.
   *
   * For the Hideout use a zero UUID
   * (`00000000-0000-0000-0000-000000000000`)
   */
  playlist_guid: UUID5Seg;
  /**
   * The Flow of the Match that should be searched
   * for.
   */
  match_flow: KOCServerPlaylistMatchFlow;
  request_id: number;
  map_override: KOCMapOverride;
  ball_override: KOCBallOverride;
  bot_override: boolean;
  owner: {
    invalid: 0;
  };
  content_update_version: '';
};
