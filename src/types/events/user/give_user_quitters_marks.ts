import type { KOCEvent, KOCServerPlaylistMatchFlow, KOCUserId } from '@/types';

export type KOCGiveUserQuittersMarksGameServerEvent = KOCEvent & {
  type: '_give_user_quitters_marks';
  user_id: KOCUserId;
  match_flow_type: KOCServerPlaylistMatchFlow;
};
