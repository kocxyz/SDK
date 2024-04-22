import { UUID5Seg, KOCEvent, KOCBallOverride, KOCMapOverride, KOCServerPlaylistMatchFlow } from '@/types';

export type KOCMatchmakingStartedSearchServerEvent = KOCEvent & {
  type: '_matchmaking_started_search';
  playlist_guid: UUID5Seg;
  match_flow: KOCServerPlaylistMatchFlow;
  map_override: KOCMapOverride;
  ball_override: KOCBallOverride;
  bot_override: boolean;
  owner: {
    invalid: 0;
  };
  request_id: number;
};
