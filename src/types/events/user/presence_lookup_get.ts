import type { KOCEvent } from '@/types/events/event';
import type { KOCUser } from '@/types/user';

export type KOCPresenceLookupGetServerEvent = KOCEvent & {
  type: '_presence_lookup_get';
  partial_name: string;
  update: KOCUser[];
};
