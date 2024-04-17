import { KOCEvent, UUID5Seg, KOCServerPlaylistMatchFlow } from '@/types';

export type KOCMatchmakingUserUpdateSkillGameServerEvent = KOCEvent & {
  type: '_matchmaking_user_update_skill';
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  season: number;
  players: unknown[];
};
