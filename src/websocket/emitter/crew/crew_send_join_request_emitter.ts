import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewSendJoinRequestParameters = {
  userId: number;
};

export const emitCrewSendJoinRequest: KOCClientEmitter<EmitterCrewSendJoinRequestParameters> = (client, params) =>
  client.emit({
    type: '_crews_send_join_request',
    user_id: {
      velan: params.userId,
    },
  });
