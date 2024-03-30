import { KOCCohorts } from '../cohorts';
import { KOCServerPlaylist } from '../playlist';
import { KOCServerRegion } from '../region';
import { KOCServerSwitches } from '../switches';
import { KOCServerTunables } from '../tunables';
import { KOCUserSettings } from '../user_settings';
import { KOCEvent } from './event';

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
    [key in KOCServerTunables]?: number;
  };
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
  packages: unknown[];
  /**
   * The users configuration that is stored on the server
   */
  user_settings: KOCUserSettings;
};
