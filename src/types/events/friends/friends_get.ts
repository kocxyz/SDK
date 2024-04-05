import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';
import { KOCUser } from '@/types/user';

export type KOCFriendsGetServerEvent = KOCEvent & {
  type: '_friends_get';
  full_update: boolean;
  full_list: boolean;
  update?: KOCUser[];
  remove?: KOCUserId[];
};
