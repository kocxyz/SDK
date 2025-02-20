import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

/**
 * An event that can be used to kick a user
 * from the crew.
 */
export type KOCCrewsKickUserClientEvent = KOCEvent & {
  type: '_crews_kick_user';
  user_id: KOCUserId;
};
