import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewAcceptJoinRequestParameters = {
  userId: number;
};

export const emitCrewAcceptJoinRequest: KOCClientEmitter<EmitterCrewAcceptJoinRequestParameters> = (client, params) =>
  client.emit({
    type: '_crews_accept_join_request',
    user_id: {
      velan: params.userId,
    },
  });
