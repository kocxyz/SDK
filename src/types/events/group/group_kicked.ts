import type { KOCEvent } from '@/types/events/event';

export type KOCGroupKickedServerEvent = KOCEvent & {
  type: '_kicked_from_group';
};
