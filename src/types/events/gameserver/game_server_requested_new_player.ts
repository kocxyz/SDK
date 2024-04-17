import { KOCEvent, KOCUserId, UUID5Seg, KOCServerPlaylistMatchFlow } from '@/types/';

export type KOCGameServerRequestedNewPlayerGameServerEvent = KOCEvent & {
  type: '_game_server_requested_new_player';
  disconnected_user_id: KOCUserId;
  team_id: number;
  average_mmr: number;
  average_sr: number;
  average_tier: number;
  average_division: number;
  region: UUID5Seg;
  playlist: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  client_version: 269701;
  platform: 'error';
  crossplay: boolean;
};
