import { KOCUserId, KOCUserPairs } from '../../user';
import { KOCEvent } from '../event';

export type KOCPersistenceGetUserPairsServerEvent = KOCEvent & {
  type: '_persistence_get_user_pairs';
  full_update: boolean;
  users: UsersEntry[];
};

type UsersEntry = {
  user_id: KOCUserId;
  pairs: Partial<KOCUserPairs>;
};
