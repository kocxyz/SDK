import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewRequestInfoParameters = {
  userIds: number[];
};

export const emitCrewRequestInfo: KOCClientEmitter<EmitterCrewRequestInfoParameters> = (client, params) =>
  client.emit({
    type: '_crews_request_info',
    users: params.userIds.map((id) => ({
      user_id: {
        velan: id,
      },
    })),
  });
