import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewRejectInviteParameters = {
  userId: number;
};

export const emitCrewRejectInvite: KOCClientEmitter<EmitterCrewRejectInviteParameters> = (client, params) =>
  client.emit({
    type: '_crews_reject_invite',
    user_id: {
      velan: params.userId,
    },
  });
