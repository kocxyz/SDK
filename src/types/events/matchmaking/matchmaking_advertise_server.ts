import { IPAddress } from '@/types/connection';
import { KOCEvent } from '@/types/events/event';
import { KOCBallOverride, KOCMapOverride } from '@/types/events/gameserver/gameserver_configure';
import { KOCUserId, UUID4Seg, UUID5Seg } from '@/types/id';
import { KOCServerPlaylistMatchFlow } from '@/types/playlist';

export type KOCMatchmakingAdvertiseServerServerEvent = KOCEvent & {
  type: '_matchmaking_advertise_server';
  host_address: `${IPAddress}:${number}`;
  multiplay_server_id: number;
  multiplay_profile_id: number;
  group_leader: KOCUserId;
  game_server_uuid: UUID5Seg;
  game_server_region_id: UUID5Seg;
  game_server_fleet_id: UUID5Seg;
  next_datacenter: unknown;
  autodetect_datacenter: unknown;
  /**
   * Path on the server to the log file of
   * the game server.
   *
   * @example C:\\users\\root\\AppData\\Local\\KnockoutCityServer/logs/2023.06.08-17.44.46.481-server.txt
   */
  game_server_log: string;
  game_session_guid: UUID4Seg;
  game_server_match_flow: Extract<KOCServerPlaylistMatchFlow, 2>;
  /**
   * The server playlist guid.
   *
   * For the Hideout use a zero UUID
   * (`00000000-0000-0000-0000-000000000000`)
   */
  game_server_playlist_guid: UUID5Seg;
  map_override: KOCMapOverride;
  ball_override: KOCBallOverride;
  bot_override: false;
  owner: 0;
  /**
   * If its possible to connect as spectator.
   */
  connect_as_spectator: boolean;
  /**
   * If its possible to join if in progress.
   */
  join_in_progress: boolean;
  stats_upload_to_s3: false;
  request_id: number;
  connect_token: string;
};
