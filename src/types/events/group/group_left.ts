import { KOCEvent } from '@/types/events/event';

/**
 * An event that notifies when a group
 * was successfully left.
 */
export type KOCGroupLeftServerEvent = KOCEvent & {
  type: '_left_group';
};
