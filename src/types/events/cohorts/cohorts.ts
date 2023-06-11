import { KOCCohorts } from '../../cohorts';
import { KOCEvent } from '../event';

export type KOCCohortsServerEvent = KOCEvent & {
  type: '_cohorts';
  /**
   * The cohorts of the server
   */
  cohorts: {
    [key: `${number}`]: KOCCohorts;
  };
};
