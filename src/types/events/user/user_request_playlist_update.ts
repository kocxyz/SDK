import { KOCEvent } from '../event';

/**
 * Requests the playlist from the server.
 *
 * Response will happen via `_playlists_get` event.
 */
export type KOCUserRequestPlaylistUpdateClientEvent = KOCEvent & {
  type: '_user_request_playlist_update';
};
