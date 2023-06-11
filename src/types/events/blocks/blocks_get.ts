import { KOCEvent } from '../event';

export type KOCBlocksGetServerEvent = KOCEvent & {
  type: '_blocks_get';
  full_update: boolean;
  full_list: boolean;
  update: unknown[];
};
