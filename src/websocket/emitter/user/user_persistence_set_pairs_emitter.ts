import type { KOCUserPairs } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPersistenceSetPairsParameters = {
  userId: number;
  pairs: Partial<KOCUserPairs>[];
};

export const emitUserPersistenceSetPairs: KOCClientEmitter<EmitterUserPersistenceSetPairsParameters> = (
  client,
  params,
) =>
  client.emit({
    type: '_persistence_set_user_pairs',
    user_id: {
      velan: params.userId,
    },
    pairs: params.pairs,
  });
