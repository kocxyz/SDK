import { UUID5Seg } from '@/types/id';
import { KOCUserSkill } from '@/types/user';

export type KOCServerPlaylistMatchFlow =
  // Maybe Private Match
  | 0
  // Training
  | 1
  // Hideout
  | 2
  | 3
  | 4;

export type KOCGameServerPlaylist = {
  playlist_guid: UUID5Seg;
  playlist_name: string;
  active_custom: boolean;
  active_tutorial: boolean;
  active_quickplay: boolean;
  active_ranked: boolean;
  allow_new_player_matchmaking: boolean;
  allow_replacement_droids: boolean;
};

export type KOCServerPlaylist = {
  match_flow: KOCServerPlaylistMatchFlow;
} & KOCGameServerPlaylist &
  KOCUserSkill;
