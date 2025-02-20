import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId, UUID5Seg } from '@/types/id';

/**
 * An event that can be used to accept a crew invite.
 */
export type KOCCrewsAcceptInviteClientEvent = KOCEvent & {
  type: '_crews_accept_invite';
  /**
   * The Id of the User who sent the invite.
   */
  user_id: KOCUserId;
  /**
   * The UUID of the crew to join
   */
  crew_guid: UUID5Seg;
};
