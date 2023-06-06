import { KOCEvent } from "../event"

export type KOCRelayGroupInviteClientEvent = KOCEvent & {
  type: '_relay',
  user_id: {
    /**
     * The user Id of the receiver
     */
    velan: number
  },
  relay_type: '_relay_group_invite',
  payload: {
    sender_id: {
      /**
       * The user Id of the sender
       */
      velan: number
    }
  },
  // TODO: No clue what the ea: 1 does.
  sender_first_party_id: { ea: 1 },
  sender_crossplay_allowed: boolean,
  // TODO: Figure out what platform kind's exist but
  // probably 7 will always be correct since only one
  // platform exists for private servers.
  sender_platform_kind: 7,
  /**
   * The message of the group invite.
   * As far as known now it will never be displayed.
   */
  message: string,
}