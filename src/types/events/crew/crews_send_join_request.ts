import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that can be used to request to join
 * a crew.
 */
export type KOCCrewsSendJoinRequestClientEvent = KOCEvent & {
  type: '_crews_send_join_request';
  user_id: KOCUserId;
};
