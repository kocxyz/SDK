import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewRejectJoinRequestParameters = {
  userId: number;
};

export const emitCrewRejectJoinRequest: KOCClientEmitter<EmitterCrewRejectJoinRequestParameters> = (client, params) =>
  client.emit({
    type: '_crews_reject_join_request',
    user_id: {
      velan: params.userId,
    },
  });
