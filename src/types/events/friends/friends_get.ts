import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCUser } from '@/types/user';

export type KOCFriendsGetServerEvent = KOCEvent & {
  type: '_friends_get';
  full_update: boolean;
  full_list: boolean;
  update?: KOCUser[];
  remove?: KOCUserId[];
};
