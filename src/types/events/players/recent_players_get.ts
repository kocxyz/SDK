import type { KOCEvent } from '@/types/events/event';
import type { KOCUser } from '@/types/user';

export type KOCRecentPlayersGetServerEvent = KOCEvent & {
  type: '_recent_players_get';
  full_update: boolean;
  full_list: boolean;
  update: KOCUser[];
};
