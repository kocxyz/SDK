import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterGroupPromoteLeaderParameters = {
  /**
   * The Id of the User to promote to leader.
   */
  userId: number;
};

export const emitPromoteGroupLeader: KOCEmitter<EmitterGroupPromoteLeaderParameters> = (client, params) =>
  client.emit({
    type: '_group_promote_leader',
    user_id: {
      velan: params.userId,
    },
  });
