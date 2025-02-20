import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

export type CommercePurchaseResult =
  /**
   * Success
   */
  | 0
  /**
   * Not enough balance
   */
  | 1
  /**
   * Already owned
   */
  | 2;

/**
 * An event that is sent by the server when a
 * `_commerce_purchase` event is sent by the client.
 */
export type KOCCommercePurchaseResultServerEvent = KOCEvent & {
  type: '_commerce_purchase_result';
  purchase_result: CommercePurchaseResult;
  user_id: KOCUserId;
};
