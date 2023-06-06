import { KOCServerPlaylist } from "../playlist"
import { KOCServerRegion } from "../region"
import { KOCServerSwitches } from "../switches"
import { KOCServerTunables } from "../tunables"
import { KOCServerUserSettings } from "../user_settings"
import { KOCEvent } from "./event"

export type KOCWelcomeServerEvent = KOCEvent & {
  type: '_welcome',
  // TODO: No clue what that value is
  // Maybe version number?
  backend_changelist: 269701
  /**
   * Time of the server in miliseconds (UTC)
   */
  time_utc: number
  /**
   * The switch configuration of the server
   */
  switches: {
    [key in KOCServerSwitches]: boolean
  }
  /**
   * The tunables configuration of the server
   */
  tunables: {
    [key in KOCServerTunables]: boolean
  }
  /**
   * The cohorts of the server
   */
  cohorts: {
    [key: `${number}`]: {
      "upsell_freq_behavior": "control_group",
      "no_new_player_matchmaking_behavior": "no_new_player_matchmaking",
      "linear_ftue_behavior": "control_group",
      "breadcrumbs_no_ftue_behavior": "control_group",
      "breadcrumbs_ftue_behavior": "control_group",
      "daily_hideout_bonus_behavior": "control_group",
      "new_news_screen_behavior": "control_group",
      "extended_new_player_bots": "control_group",
      "ps4_sim_step_slow_behavior": "control_group",
      "xb1_sim_step_slow_behavior": "control_group",
      "faster_new_player_bot_matchmaking": "control_group"
    }
  }
  /**
   * The regions of the server
   */
  regions: KOCServerRegion[]
  playlist_calendars_enabled: boolean
  /**
   * The playlist configuration of the server
   */
  playlists: KOCServerPlaylist[]
  username_visible: boolean
  is_telemetry_allowed: boolean
  packages: unknown[]
  /**
   * The users configuration that is stored on the server
   */
  user_settings: KOCServerUserSettings
}