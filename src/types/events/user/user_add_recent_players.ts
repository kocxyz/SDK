import type { KOCEvent, KOCUserId } from '@/types';

export type KOCUserAddRecentPlayersClientEvent = KOCEvent & {
  type: '_user_add_recent_players';
  players: { player: KOCUserId }[];
};
