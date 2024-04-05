import { KOCEvent } from '@/types/events/event';
import { KOCUserId, UUID5Seg } from '@/types/id';

export type KOCFriendsGetServerEvent = KOCEvent & {
  type: '_friends_get';
  full_update: boolean;
  full_list: boolean;
  update?: KOCFriendEntry[];
  remove?: KOCUserId[];
};

type KOCFriendEntry = {
  user_id: KOCUserId;
  first_party: [];
  username: string;
  publisher_username: string;
  publisher_username_code: number;
  username_visible: boolean;
  player_icon: UUID5Seg;
  xp: number;
  online_state: number;
  rich_presence: number;
  group_size: number;
  last_authenticated_platform: number;
  is_in_crew: boolean;
};
