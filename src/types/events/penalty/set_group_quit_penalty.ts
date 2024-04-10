import { KOCEvent } from '@/types/events/event';

export type KOCSetGroupQuitPenaltyServerEvent = KOCEvent & {
  type: '_set_group_quit_penalty';
  user_id: { invalid: 0 | 1 };
  penalty_end_timestamp_s: number;
};
