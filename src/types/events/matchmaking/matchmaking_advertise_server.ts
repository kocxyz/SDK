import { UUID } from 'crypto';
import { IPAddress } from '../../connection';
import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';
import { KOCDatabaseId } from '../../id';
import { KOCServerPlaylistMatchFlow } from '../../playlist';

export type KOCMatchmakingAdvertiseServerServerEvent = KOCEvent & {
  type: '_matchmaking_advertise_server';
  host_address: `${IPAddress}:${number}`;
  multiplay_server_id: number;
  multiplay_profile_id: number;
  group_leader: KOCUserId;
  game_server_uuid: KOCDatabaseId;
  game_server_region_id: UUID;
  next_datacenter: unknown;
  autodetect_datacenter: unknown;
  game_server_fleet_id: UUID;
  /**
   * Path on the server to the log file of
   * the game server.
   *
   * @example C:\\users\\root\\AppData\\Local\\KnockoutCityServer/logs/2023.06.08-17.44.46.481-server.txt
   */
  game_server_log: string;
  game_session_guid: KOCDatabaseId;
  game_server_match_flow: Extract<KOCServerPlaylistMatchFlow, 2>;
  /**
   * The server playlist guid.
   *
   * For the Hideout use a zero UUID
   * (`00000000-0000-0000-0000-000000000000`)
   */
  game_server_playlist_guid: UUID;
  map_override: -1;
  ball_override: -1;
  bot_override: false;
  owner: 0;
  /**
   * If its possible to connect as spectator.
   */
  connect_as_spectator: false;
  /**
   * If its possible to join if in progress.
   */
  join_in_progress: false;
  stats_upload_to_s3: false;
  request_id: number;
  connect_token: string;
};
