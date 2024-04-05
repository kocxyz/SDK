import { KOCEvent } from '@/types/events/event';

/**
 * An event that can be used to request the
 * crew inventory
 *
 * Response will be sent via the `_commerce_crew_inventory_update`
 * server event.
 */
export type KOCCommerceGetCrewInventoryClientEvent = KOCEvent & {
  type: '_commerce_get_crew_inventory';
};
