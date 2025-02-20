import type {
  KOCBallOverride,
  KOCEvent,
  KOCMapOverride,
  KOCServerPlaylistMatchFlow,
  KOCUserId,
  KOCUserIdNone,
  UUID5Seg,
} from '@/types';

export type KOCMatchmakingStartedSearchServerEvent = KOCEvent & {
  type: '_matchmaking_started_search';
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  map_override: KOCMapOverride;
  ball_override: KOCBallOverride;
  bot_override: boolean;
  owner: KOCUserId | KOCUserIdNone;
  request_id: number;
};
