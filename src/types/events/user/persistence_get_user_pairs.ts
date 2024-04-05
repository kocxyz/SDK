import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';
import { KOCUserPairs } from '@/types/user';

export type KOCPersistenceGetUserPairsServerEvent = KOCEvent & {
  type: '_persistence_get_user_pairs';
  full_update: boolean;
  users: UsersEntry[];
};

type UsersEntry = {
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>;
};
