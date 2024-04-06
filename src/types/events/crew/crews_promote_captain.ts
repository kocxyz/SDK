import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that can be used to promote another
 * user to captain of a crew.
 *
 * This event is only valid if the user is the
 * current captain of the crew.
 */
export type KOCCrewsPromoteCaptainClientEvent = KOCEvent & {
  type: '_crews_promote_captain';
  user_id: KOCUserId;
};
