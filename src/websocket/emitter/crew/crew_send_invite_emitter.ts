import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewSendInviteParameters = {
  userId: number;
};

export const emitCrewSendInvite: KOCClientEmitter<EmitterCrewSendInviteParameters> = (client, params) =>
  client.emit({
    type: '_crews_send_invite',
    user_id: {
      velan: params.userId,
    },
  });
