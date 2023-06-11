import { KOCEmitter } from '../emitter';

type EmitterCrewAcceptJoinRequestParameters = {
  userId: number;
};

export const emitCrewAcceptJoinRequest: KOCEmitter<EmitterCrewAcceptJoinRequestParameters> = (client, params) =>
  client.emit({
    type: '_crews_accept_join_request',
    user_id: {
      velan: params.userId,
    },
  });
