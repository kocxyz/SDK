import { KOCEvent } from '@/types/events/event';
import { UUID5Seg } from '@/types/id';
import { KOCGameServerPlaylist, KOCServerPlaylistMatchFlow } from '@/types/playlist';
import { KOCServerSwitches } from '@/types/switches';
import { KOCServerTunables } from '@/types/tunables';

export const KOC_BALL_OVERRIDE_RANDOM = -1;
export const KOC_BALL_OVERRIDE_BOMB_BALL = 2;
export const KOC_BALL_OVERRIDE_MULTI_BALL = 3;
export const KOC_BALL_OVERRIDE_CAGE_BALL = 4;
export const KOC_BALL_OVERRIDE_MOON_BALL = 5;
export const KOC_BALL_OVERRIDE_SNIPER_BALL = 6;
export const KOC_BALL_OVERRIDE_SODA_BALL = 7;
export const KOC_BALL_OVERRIDE_BOOMERANG_BALL = 9;
export const KOC_BALL_OVERRIDE_POISON_BALL = 10;
export const KOC_BALL_OVERRIDE_ANY_BALL = 11;

export type KOCBallOverride =
  | typeof KOC_BALL_OVERRIDE_RANDOM
  | typeof KOC_BALL_OVERRIDE_BOMB_BALL
  | typeof KOC_BALL_OVERRIDE_MULTI_BALL
  | typeof KOC_BALL_OVERRIDE_CAGE_BALL
  | typeof KOC_BALL_OVERRIDE_MOON_BALL
  | typeof KOC_BALL_OVERRIDE_SNIPER_BALL
  | typeof KOC_BALL_OVERRIDE_SODA_BALL
  | typeof KOC_BALL_OVERRIDE_BOOMERANG_BALL
  | typeof KOC_BALL_OVERRIDE_POISON_BALL
  | typeof KOC_BALL_OVERRIDE_ANY_BALL;

export const KOC_MAP_OVERRIDE_RANDOM = -1;
export const KOC_MAP_OVERRIDE_ROOFTOP_RUMBLE = 2;
export const KOC_MAP_OVERRIDE_BACK_ALLEY_BRAWL = 3;
export const KOC_MAP_OVERRIDE_CONCUSSION_YARD = 4;
export const KOC_MAP_OVERRIDE_GALAXY_BURGER = 5;
export const KOC_MAP_OVERRIDE_KNOCKOUT_ROUNDABOUT = 6;
export const KOC_MAP_OVERRIDE_JUKEBOX_JUNCTION = 7;
export const KOC_MAP_OVERRIDE_HOLLYWOOD_DRIVE_IN = 8;
export const KOC_MAP_OVERRIDE_LOCKDOWN_THROWDOWN = 9;
export const KOC_MAP_OVERRIDE_ALIEN_SMASH_SITE = 10;
export const KOC_MAP_OVERRIDE_SLUDGEWORKS = 11;
export const KOC_MAP_OVERRIDE_DUALING_DOCKS = 12;

export type KOCMapOverride =
  | typeof KOC_MAP_OVERRIDE_RANDOM
  | typeof KOC_MAP_OVERRIDE_ROOFTOP_RUMBLE
  | typeof KOC_MAP_OVERRIDE_BACK_ALLEY_BRAWL
  | typeof KOC_MAP_OVERRIDE_CONCUSSION_YARD
  | typeof KOC_MAP_OVERRIDE_GALAXY_BURGER
  | typeof KOC_MAP_OVERRIDE_KNOCKOUT_ROUNDABOUT
  | typeof KOC_MAP_OVERRIDE_JUKEBOX_JUNCTION
  | typeof KOC_MAP_OVERRIDE_HOLLYWOOD_DRIVE_IN
  | typeof KOC_MAP_OVERRIDE_LOCKDOWN_THROWDOWN
  | typeof KOC_MAP_OVERRIDE_ALIEN_SMASH_SITE
  | typeof KOC_MAP_OVERRIDE_SLUDGEWORKS
  | typeof KOC_MAP_OVERRIDE_DUALING_DOCKS;

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
