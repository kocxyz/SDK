import type { KOCEvent } from '@/types/events/event';

export type KOCBrawlPassGetServerEvent = KOCEvent & {
  type: '_brawl_pass_get';
  full_update: boolean;
  full_list: boolean;
  users: unknown[];
};
