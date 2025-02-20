import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterBlockPlayerParameters = {
  /**
   * The Id of the user who to block.
   */
  userId: number;
};

export const emitBlockPlayer: KOCClientEmitter<EmitterBlockPlayerParameters> = (client, params) =>
  client.emit({
    type: '_block_player',
    user_id: {
      velan: params.userId,
    },
  });
