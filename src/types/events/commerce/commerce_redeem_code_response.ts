import { KOCEvent } from '@/types/events/event';

/**
 * An event that will be emitted as a reponse to a
 * `_commerce_redeem_code` Event.
 */
export type KOCCommerceRedeemCodeResponseServerEvent = KOCEvent & {
  type: '_commerce_redeem_code_response';
} & ({ success: false; error: string } | { success: true });
