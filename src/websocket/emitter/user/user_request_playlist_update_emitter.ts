import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

/**
 * Request the playlists that are available on the
 * server.
 *
 * A response will happen via the `_playlists_get` event.
 *
 * @param client The KOCWebsocketClient instance
 */
export const emitUserRequestPlaylistUpdate: KOCClientEmitter<void> = (client) =>
  client.emit({
    type: '_user_request_playlist_update',
  });
