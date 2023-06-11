import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

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
  };
  // TODO: No clue what the ea: 1 does.
  sender_first_party_id: { ea: 1 };
  sender_crossplay_allowed: boolean;
  // TODO: Figure out what platform kind's exist but
  // probably 7 will always be correct since only one
  // platform exists for private servers.
  sender_platform_kind: 7;
  /**
   * The message of the group invite.
   * As far as known now it will never be displayed.
   */
  message: string;
};
