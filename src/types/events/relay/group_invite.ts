import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { Platform } from '@/types/platform';

export type KOCRelayGroupInvite = KOCEvent & {
  type: '_relay';
  relay_type: '_relay_group_invite';
  /**
   * The user Id of the receiver
   */
  user_id: KOCUserId;
  payload: {
    /**
     * The user Id of the sender
     */
    sender_id: KOCUserId;
    sender_first_party_id: { ea: number };
    sender_crossplay_allowed: boolean;
    sender_platform_kind: Platform;
    /**
     * The message of the group invite.
     * As far as known now it will never be displayed.
     */
    message: string;
  };
};
