import { KOCUserPairs } from '@/types';
import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPersistenceSetPairsParameters = {
  userId: number;
  pairs: Partial<KOCUserPairs>[];
};

export const emitUserPersistenceSetPairs: KOCEmitter<EmitterUserPersistenceSetPairsParameters> = (client, params) =>
  client.emit({
    type: '_persistence_set_user_pairs',
    user_id: {
      velan: params.userId,
    },
    pairs: params.pairs,
  });
