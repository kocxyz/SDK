import { KOCEvent } from '../event';

/**
 * An event can be emitted to receive the user inventory.
 * The response will be emitted as a `_commerce_inventory_update`.
 */
export type KOCCommerceGetInventoryClientEvent = KOCEvent & {
  type: '_commerce_get_inventory';
};
