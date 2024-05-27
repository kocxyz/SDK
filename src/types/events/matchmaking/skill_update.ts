import { KOCEvent, UUID5Seg, KOCServerPlaylistMatchFlow } from '@/types';

export type KOCSkillUpdateServerEvent = KOCEvent & {
  type: '_skill_update';
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  last_match_loss_forgiveness: number;
  is_seasonal_reset: boolean;
  skill: {
    mmr: number;
    skill_rating: number;
    skill_rating_decayed: number;
    volatility: number;
    tier: number;
    division: number;
    division_progress: number;
    win_streak: number;
    season: number;
    total_games_played: number;
    wins: number;
    mvps: number;
    current_mmr: number;
    current_tier: number;
    current_division: number;
    current_division_progress: number;
  };
};
