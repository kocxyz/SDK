import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';
import { KOCUserPairs } from '@/types/user';

type KOCPersistenceSetUserPairsEvent = KOCEvent & {
  type: '_persistence_set_user_pairs';
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>[];
};

export type KOCPersistenceSetUserPairsClientEvent = KOCPersistenceSetUserPairsEvent;
export type KOCPersistenceSetUserPairsGameServerEvent = KOCPersistenceSetUserPairsEvent;
