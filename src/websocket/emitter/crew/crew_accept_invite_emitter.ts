import { UUID } from 'crypto';
import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewAcceptInviteParameters = {
  userId: number;
  crewGuid: UUID;
};

export const emitCrewAcceptInvite: KOCClientEmitter<EmitterCrewAcceptInviteParameters> = (client, params) =>
  client.emit({
    type: '_crews_accept_invite',
    user_id: {
      velan: params.userId,
    },
    crew_guid: params.crewGuid,
  });
