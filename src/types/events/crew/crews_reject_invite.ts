import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

/**
 * An event that can be used to reject a crew invite.
 */
export type KOCCrewsRejectInviteClientEvent = KOCEvent & {
  type: '_crews_reject_invite';
  /**
   * The Id of the User who sent the invite.
   */
  user_id: KOCUserId;
};
