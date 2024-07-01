import { KOCCohorts } from '@/types/cohorts';
import { KOCEvent } from '@/types/events/event';
import { KOCServerPlaylist } from '@/types/playlist';
import { KOCServerRegion } from '@/types/region';
import { KOCServerSwitches } from '@/types/switches';
import { KOCServerTunables } from '@/types/tunables';
import { KOCUserSettings } from '@/types/user_settings';

export type KOCWelcomeServerEvent = KOCEvent & {
  type: '_welcome';
  // TODO: No clue what that value is
  // Maybe version number?
  backend_changelist: 269701;
  /**
   * Time of the server in miliseconds (UTC)
   */
  time_utc: number;
  /**
   * The switch configuration of the server
   */
  switches: {
    [key in KOCServerSwitches]?: boolean;
  };
  /**
   * The tunables configuration of the server
   */
  tunables: {
    [key in Exclude<KOCServerTunables, 'client_display_crossplay_enable_popup'>]?: number;
  } & { client_display_crossplay_enable_popup?: boolean };
  /**
   * The cohorts of the server
   */
  cohorts: {
    [key: `${number}`]: KOCCohorts;
  };
  /**
   * The regions of the server
   */
  regions: KOCServerRegion[];
  playlist_calendars_enabled: boolean;
  /**
   * The playlist configuration of the server
   */
  playlists: KOCServerPlaylist[];
  username_visible: boolean;
  is_telemetry_allowed: boolean;
  packages: KOCContentUpdatePackage[];
  /**
   * The users configuration that is stored on the server
   */
  user_settings: KOCUserSettings;
};

export type KOCContentUpdatePackage = {
  /**
   * The id of the content update.
   */
  id: number;
  /**
   * The URL where the content update can be downloaded.
   *
   * @example http://localhost:8080/patch.zip
   */
  url: string;
  /**
   * The name of the file that will be stored on disk.
   */
  file_name: string;
  /**
   * The signature of the file.
   * Will be verified using the public key of the server.
   */
  file_hash: string;
  /**
   * The size of the file in bytes.
   */
  file_size_bytes: number;
};
