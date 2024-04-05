import { KOCCohorts } from '@/types/cohorts';
import { KOCEvent } from '@/types/events/event';

export type KOCCohortsServerEvent = KOCEvent & {
  type: '_cohorts';
  /**
   * The cohorts of the server
   */
  cohorts: {
    [key: `${number}`]: KOCCohorts;
  };
};
