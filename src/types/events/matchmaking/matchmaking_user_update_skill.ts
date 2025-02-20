import type { KOCEvent, KOCServerPlaylistMatchFlow, KOCUserId, UUID5Seg } from '@/types';

export type KOCMatchmakingUserUpdateSkillGameServerEvent = KOCEvent & {
  type: '_matchmaking_user_update_skill';
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  season: number;
  players: {
    user_id: KOCUserId;
    updated_mmr: number;
    updated_skill_rating: number;
    updated_volatility: number;
    updated_tier: number;
    updated_division: number;
    updated_division_progress: number;
    updated_win_streak: number;
    updated_total_games_played: number;
    updated_wins: number;
    updated_mvps: number;
    last_match_loss_forgiveness: number;
  }[];
};
