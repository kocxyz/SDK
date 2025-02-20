import type { UUID5Seg } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewAcceptInviteParameters = {
  userId: number;
  crewGuid: UUID5Seg;
};

export const emitCrewAcceptInvite: KOCClientEmitter<EmitterCrewAcceptInviteParameters> = (client, params) =>
  client.emit({
    type: '_crews_accept_invite',
    user_id: {
      velan: params.userId,
    },
    crew_guid: params.crewGuid,
  });
