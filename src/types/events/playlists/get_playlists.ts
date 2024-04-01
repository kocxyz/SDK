import { KOCEvent } from '../event';
import { KOCServerPlaylist } from '@/types';

export type KOCPlaylistsGetServerEvent = KOCEvent & {
  type: '_playlists_get';
  playlist_calendars_enabled: boolean;
  playlists: KOCServerPlaylist[];
};
