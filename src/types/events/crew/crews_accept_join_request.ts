import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that can be used to accept a crew join request.
 */
export type KOCCrewsAcceptJoinRequestClientEvent = KOCEvent & {
  type: '_crews_accept_join_request';
  /**
   * The Id of the User who sent the join request.
   */
  user_id: KOCUserId;
};
