import type { KOCEvent } from '@/types/events/event';

/**
 * Must be 20 characters long and contain only letters and numbers.
 *
 * @example "22PP-HLPD-83VD-MM55-TPBA"
 */
export type KOCCommerceRedeemCode = `${string}-${string}-${string}-${string}-${string}`;

/**
 * An event can be emitted to redeem a code.
 */
export type KOCCommerceRedeemCodeClientEvent = KOCEvent & {
  type: '_commerce_redeem_code';
  /**
   * The code to redeem.
   * Must be 20 characters long and contain only letters and numbers.
   *
   * @example "22PP-HLPD-83VD-MM55-TPBA"
   */
  code: KOCCommerceRedeemCode;
};
