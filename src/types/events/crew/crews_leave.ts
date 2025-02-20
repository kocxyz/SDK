import type { KOCEvent } from '@/types/events/event';

/**
 * An event that can be used to leave a crew
 */
export type KOCCrewsLeaveClientEvent = KOCEvent & {
  type: '_crews_leave';
};
