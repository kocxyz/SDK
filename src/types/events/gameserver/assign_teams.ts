import { KOCEvent } from '@/types/events/event';
import { KOCGroupSize } from '@/types/group';
import { KOCUserId, UUID5Seg } from '@/types/id';
import { KOCServerPlaylistMatchFlow } from '@/types/playlist';
import { KOCUserSkill } from '@/types/user';

export type TeamUser = {
  user_id: KOCUserId;
  group_leader: KOCUserId;
  group_size: KOCGroupSize;
  platform: string;
  crossplay: boolean;
  skill: KOCUserSkill;
  adjusted_mmr: number;
};

export type KOCAssignTeamsServerEvent = KOCEvent & {
  type: '_assign_teams';
  /**
   * The UUID of the region the server is located in.
   */
  game_server_region_id: UUID5Seg;
  in_progress: boolean;
  match_flow: KOCServerPlaylistMatchFlow;
  team_size: number;
  team_count: number;
  allow_replacement_droids: 0 | 1;
  players: TeamUser[];
};
