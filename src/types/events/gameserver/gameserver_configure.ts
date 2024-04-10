import { KOCEvent } from '@/types/events/event';
import { UUID5Seg } from '@/types/id';
import { KOCGameServerPlaylist, KOCServerPlaylistMatchFlow } from '@/types/playlist';
import { KOCServerSwitches } from '@/types/switches';
import { KOCServerTunables } from '@/types/tunables';

export type KOCBallOverride =
  /** Random */
  | -1
  /** Bomb Ball */
  | 2
  /** Multi Ball */
  | 3
  /** Cage Ball */
  | 4
  /** Moon Ball */
  | 5
  /** Sniper Ball */
  | 6
  /** Soda Ball */
  | 7
  /** Boomerang Ball */
  | 9
  /** Poison Ball */
  | 10
  /** Any Ball */
  | 11;

export type KOCMapOverride =
  /** Random */
  | -1
  /** Rooftop Rumble */
  | 2
  /** Back Alley Brawl */
  | 3
  /** Concussion Yard */
  | 4
  /** Galaxy Burger */
  | 5
  /** Knockout Roundabout */
  | 6
  /** Jukebox Junction */
  | 7
  /** Hollywood Drive-In */
  | 8
  /** Lockdown Throwdown */
  | 9
  /** Alien Smash Site */
  | 10
  /** Sludgeworks */
  | 11
  /** Dualing Docks */
  | 12;

export type KOCGameServerConfigureServerEvent = KOCEvent & {
  type: '_game_server_configure';
  /**
   * The UUID of the game server.
   */
  uuid: UUID5Seg;
  /**
   * The UTC time at which the game server was started.
   * (In seconds since the Unix epoch.)
   */
  time_utc: number;
  /**
   * The UUID of the playlist.
   */
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  playlist_calendars_enabled: boolean;
  playlists: KOCGameServerPlaylist[];

  map_override: KOCMapOverride;
  ball_override: KOCBallOverride;
  bot_override: boolean;
  owner: number;

  game_server_fleet_id: UUID5Seg;
  multiplay_server_id: number;

  switches: Partial<{ [k in KOCServerSwitches]: boolean }>;
  tunables: Partial<{ [k in KOCServerTunables]: boolean }>;
};
