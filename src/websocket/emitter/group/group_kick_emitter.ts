import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterGroupKickParameters = {
  /**
   * The Id of the user to kick.
   */
  userId: number;
};

export const emitGroupKick: KOCClientEmitter<EmitterGroupKickParameters> = (client, params) =>
  client.emit({
    type: '_group_kick',
    user_id: {
      velan: params.userId,
    },
  });
