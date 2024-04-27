import { KOCEvent } from '@/types/events/event';
import { KOCUserId, KOCUserIdNone } from '@/types/id';

export type KOCSetGroupQuitPenaltyServerEvent = KOCEvent & {
  type: '_set_group_quit_penalty';
  user_id: KOCUserId | KOCUserIdNone;
  penalty_end_timestamp_s: number;
};
