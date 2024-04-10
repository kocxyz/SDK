import { KOCEvent } from '@/types/events/event';

export type KOCSetUserQuitPenaltyServerEvent = KOCEvent & {
  type: '_set_user_quit_penalty';
  penalty_end_timestamp_s: number;
};
