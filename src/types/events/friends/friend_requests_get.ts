import { KOCEvent } from '@/types/events/event';
import { KOCUser } from '@/types/user';

export type KOCFriendRequestsGetServerEvent = KOCEvent & {
  type: '_friend_requests_get';
  full_update: boolean;
  full_list: boolean;
  update: KOCUser[];
};
