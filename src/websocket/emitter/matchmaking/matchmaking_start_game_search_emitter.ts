import type { KOCServerPlaylistMatchFlow, UUID5Seg } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterMatchmakingStartGameSearchParameters = {
  /**
   * The UUID of the server playlist to search a server for.
   *
   * For the Hideout use a zero UUID
   * (`00000000-0000-0000-0000-000000000000`)
   */
  playlistUuid: UUID5Seg;
  matchflow: Extract<KOCServerPlaylistMatchFlow, 2>;
  /**
   * An Id to identify the response from the server.
   */
  requestId: number;
};

export const emitMatchmakingStartGameSearch: KOCClientEmitter<EmitterMatchmakingStartGameSearchParameters> = (
  client,
  params,
) =>
  client.emit({
    type: '_matchmaking_start_game_search',
    playlist_guid: params.playlistUuid,
    match_flow: params.matchflow,
    request_id: params.requestId,
    map_override: -1,
    ball_override: -1,
    bot_override: false,
    owner: {
      invalid: 0,
    },
    content_update_version: '',
  });
