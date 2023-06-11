import { KOCUserId, KOCUserPairs } from '../../user';
import { KOCEvent } from '../event';

export type KOCPersistenceSetUserPairsClientEvent = KOCEvent & {
  type: '_persistence_set_user_pairs';
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>[];
};
