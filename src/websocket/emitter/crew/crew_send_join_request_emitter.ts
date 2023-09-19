import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewSendJoinRequestParameters = {
  userId: number;
};

export const emitCrewSendJoinRequest: KOCEmitter<EmitterCrewSendJoinRequestParameters> = (client, params) =>
  client.emit({
    type: '_crews_send_join_request',
    user_id: {
      velan: params.userId,
    },
  });
