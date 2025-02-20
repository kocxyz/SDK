import type { KOCCohorts } from '@/types/cohorts';
import type { KOCEvent } from '@/types/events/event';

export type KOCCohortsServerEvent = KOCEvent & {
  type: '_cohorts';
  /**
   * The cohorts of the server
   */
  cohorts: {
    [key: `${number}`]: KOCCohorts;
  };
};
