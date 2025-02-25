import type { KOCEvent } from '@/types/events/event';
import type { KOCBallOverride, KOCMapOverride } from '@/types/events/gameserver/gameserver_configure';
import type { KOCUserId, KOCUserIdNone, UUID5Seg } from '@/types/id';
import type { KOCServerPlaylistMatchFlow } from '@/types/playlist';

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
  owner: KOCUserId | KOCUserIdNone;
  content_update_version: '';
};
