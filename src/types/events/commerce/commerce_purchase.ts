import { KOCEvent } from '@/types/events/event';
import { UUID4Seg } from '@/types/id';

/**
 * An event can be emitted to purchase an item.
 */
export type KOCCommercePurchaseClientEvent = KOCEvent & {
  type: '_commerce_purchase';

  entries: CommerceEntry[];
  balance: CommerceBalance;
};

export type CommerceEntry = {
  offerAlias: UUID4Seg;

  priceName: 'default';
  payment: CommercePayment[];
};

export type CommerceBalance = {
  [CURRANCY in string]: number;
};

export type CommercePayment = {
  entryType: 'BankCurrencyAlias';
  value: 'CUR';
  quantity: number;
};
