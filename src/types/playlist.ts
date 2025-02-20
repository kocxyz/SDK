import type { UUID5Seg } from '@/types/id';
import type { KOCUserSkill } from '@/types/user';

export const KOC_PLAYLIST_MATCH_FLOW_INVALID = -1;
export const KOC_PLAYLIST_MATCH_FLOW_PRIVATE_MATCH = 0;
export const KOC_PLAYLIST_MATCH_FLOW_TRAINING = 1;
export const KOC_PLAYLIST_MATCH_FLOW_HIDEOUT = 2;
export const KOC_PLAYLIST_MATCH_FLOW_QUICKPLAY = 3;
export const KOC_PLAYLIST_MATCH_FLOW_RANKED = 4;
export const KOC_PLAYLIST_MATCH_FLOW_DROIDS = 5;

export type KOCServerPlaylistMatchFlow =
  | typeof KOC_PLAYLIST_MATCH_FLOW_INVALID
  | typeof KOC_PLAYLIST_MATCH_FLOW_PRIVATE_MATCH
  | typeof KOC_PLAYLIST_MATCH_FLOW_TRAINING
  | typeof KOC_PLAYLIST_MATCH_FLOW_HIDEOUT
  | typeof KOC_PLAYLIST_MATCH_FLOW_QUICKPLAY
  | typeof KOC_PLAYLIST_MATCH_FLOW_RANKED
  | typeof KOC_PLAYLIST_MATCH_FLOW_DROIDS;

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
