import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';
import { KOCUserPairs } from '@/types/user';

export type KOCPersistenceSetUserPairsClientEvent = KOCEvent & {
  type: '_persistence_set_user_pairs';
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>[];
};
