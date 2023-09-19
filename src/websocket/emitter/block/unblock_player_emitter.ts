import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterUnblockPlayerParameters = {
  /**
   * The Id of the user who to unblock.
   */
  userId: number;
};

export const emitUnblockPlayer: KOCEmitter<EmitterUnblockPlayerParameters> = (client, params) =>
  client.emit({
    type: '_unblock_player',
    user_id: {
      velan: params.userId,
    },
  });
