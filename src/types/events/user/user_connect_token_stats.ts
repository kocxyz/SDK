import type { KOCEvent } from '@/types/events/event';

export type UserConnectTokenStat = {
  /**
   * User ID???
   */
  result: number;
  /**
   * How long the token is still valid????
   * (Time in milliseconds)
   */
  ttl: number;
};

export type KOCUserConnectTokenStatsGameServerEvent = KOCEvent & {
  type: '_user_connect_token_stats';
  array: UserConnectTokenStat[];
};
