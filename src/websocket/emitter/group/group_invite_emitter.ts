import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterGroupInviteParameters = {
  senderId: number;
  receiverId: number;
};

export const emitGroupInvite: KOCClientEmitter<EmitterGroupInviteParameters> = (client, params) =>
  client.emit({
    type: '_relay',
    relay_type: '_relay_group_invite',
    user_id: {
      velan: params.receiverId,
    },
    payload: {
      sender_id: {
        velan: params.senderId,
      },
      sender_first_party_id: { ea: 1 },
      // Always allow crossplay since its doesn't matter.
      // Private Servers are PC only anyways.
      sender_crossplay_allowed: true,
      sender_platform_kind: 7,
      // As far as I know it will never be displayed anywhere.
      message: '',
    },
  });
