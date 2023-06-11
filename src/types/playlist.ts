import { UUID } from 'crypto';

export type KOCServerPlaylistMatchFlow =
  // Maybe Private Match??
  | 0
  // Hideout?
  | 2
  | 3
  | 4;

export type KOCServerPlaylist = {
  match_flow: KOCServerPlaylistMatchFlow;
  playlist_guid: UUID;
  playlist_name: string;
  active_custom: boolean;
  active_tutorial: boolean;
  active_quickplay: boolean;
  active_ranked: boolean;
  allow_new_player_matchmaking: boolean;
  allow_replacement_droids: boolean;
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
