import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

type KOCFriendRequestEntry = {
  user_id: KOCUserId;
  first_party: [];
  username: string;
  publisher_username: string;
  publisher_username_code: number;
  username_visible: boolean;
  sender_persona_kind: 0;
  last_authenticated_platform: number;
  persona_id: {
    invalid: 0;
  };
};

export type KOCFriendRequestsGetServerEvent = KOCEvent & {
  type: '_friend_requests_get';
  full_update: boolean;
  full_list: boolean;
  update: KOCFriendRequestEntry[];
};
