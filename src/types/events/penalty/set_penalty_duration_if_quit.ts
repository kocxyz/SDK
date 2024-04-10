import { KOCEvent } from '@/types/events/event';

export type KOCSetPenaltyDurationIfQuitServerEvent = KOCEvent & {
  type: '_set_penalty_duration_if_quit';
  penalty_duration_if_quit_s: number;
};
