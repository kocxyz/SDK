import { UUID } from 'crypto';
import { KOCEvent } from '../event';
import { KOCServerPlaylistMatchFlow } from '../../playlist';

export type KOCMatchmakingStartGameSearchClientEvent = KOCEvent & {
  type: '_matchmaking_start_game_search';
  /**
   * The UUID of the server playlist.
   *
   * For the Hideout use a zero UUID
   * (`00000000-0000-0000-0000-000000000000`)
   */
  playlist_guid: UUID;
  /**
   * The Flow of the Match that should be searched
   * for.
   */
  match_flow: Extract<KOCServerPlaylistMatchFlow, 2>;
  request_id: number;
  map_override: -1;
  ball_override: -1;
  bot_override: boolean;
  owner: {
    invalid: 0;
  };
  content_update_version: '';
};
