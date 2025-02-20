import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUnblockPlayerParameters = {
  /**
   * The Id of the user who to unblock.
   */
  userId: number;
};

export const emitUnblockPlayer: KOCClientEmitter<EmitterUnblockPlayerParameters> = (client, params) =>
  client.emit({
    type: '_unblock_player',
    user_id: {
      velan: params.userId,
    },
  });
