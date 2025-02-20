import type { KOCEvent } from '@/types/events/event';
import type { KOCUser } from '@/types/user';

export type KOCBlocksGetServerEvent = KOCEvent & {
  type: '_blocks_get';
  full_update: boolean;
  full_list: boolean;
  update: KOCUser[];
};
