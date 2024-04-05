import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';

/**
 * An event that is sent by the server when a
 * `_commerce_purchase` event is sent by the client.
 */
export type KOCCommercePurchaseResultServerEvent = KOCEvent & {
  type: '_commerce_purchase_result';

  purchase_result: // Successful
  | 0
    // Not enough currency
    | 1
    // Already owned
    | 2;

  user_id: KOCUserId;
};
