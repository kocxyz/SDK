import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCUserPairs } from '@/types/user';

export type KOCPersistenceGetUserPairsServerEvent = KOCEvent & {
  type: '_persistence_get_user_pairs';
  full_update: boolean;
  full_update_done: boolean;
  incremental: boolean;
  users: UsersEntry[];
};

type UsersEntry = {
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>;
};
