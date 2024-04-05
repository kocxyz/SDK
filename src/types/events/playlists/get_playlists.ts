import { KOCEvent } from '@/types/events/event';
import { KOCServerPlaylist } from '@/types/playlist';

export type KOCPlaylistsGetServerEvent = KOCEvent & {
  type: '_playlists_get';
  playlist_calendars_enabled: boolean;
  playlists: KOCServerPlaylist[];
};
