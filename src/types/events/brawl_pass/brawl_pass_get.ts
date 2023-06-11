import { KOCEvent } from '../event';

export type KOCBrawlPassGetServerEvent = KOCEvent & {
  type: '_brawl_pass_get';
  full_update: boolean;
  full_list: boolean;
  users: unknown[];
};
