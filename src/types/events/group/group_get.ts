import { KOCEvent } from '@/types/events/event';
import { KOCPersonaId, KOCUserId, UUID5Seg } from '@/types/id';

export type KOCGroupGetServerEvent = KOCEvent & {
  type: '_group_get';
  full_update: boolean;
  full_list: boolean;
  /**
   * The UserId of the group leader
   */
  group_loader: KOCUserId;
  update: UpdateEntry[];
};

type UpdateEntry = {
  user_id: KOCUserId;
  persona_id: KOCPersonaId;
  first_party: unknown[];
  username: string;
  publisher_username: string;
  publisher_username_code: number;
  username_visible: boolean;
  player_icon: UUID5Seg;
  xp: number;
  online_state: number;
  rich_presence: -1;
  group_size: number;
  last_authenticated_platform: 0;
};
