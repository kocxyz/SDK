import type { KOCCommerceInventoryEquipment } from '@/types/commerce';
import type { KOCCommerceCurrency } from '@/types/currencies';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId, UUID4Seg, UUID5Seg } from '@/types/id';

export type KOCCommerceInventoryUpdateServerEvent = KOCEvent & {
  type: '_commerce_inventory_update';
  is_full_update: boolean;
  user_id: KOCUserId;
  /**
   * The items the account owns
   */
  items: {
    /**
     * The different non-consumables like clothing, effects, animations, ... the account owns
     */
    durables: UUID4Seg[];
    favourites: number;
    /**
     * The different consumables the account owns
     */
    consumables: KOCCommerceInventoryConsumable[];
  };
  /**
   * The equiped items for all the characters
   */
  equipment: KOCCommerceInventoryEquipment;
  /**
   * The balance of the account
   */
  balance: KOCCommerceInventoryBalance;
};

export type KOCCommerceInventoryConsumable = {
  [key: UUID4Seg]: number;
  id: UUID5Seg;
};

export type KOCCommerceInventoryBalance = {
  entries: KOCCommerceInventoryBalanceEntry[];
};

export type KOCCommerceInventoryBalanceEntry = {
  currencyAlias: KOCCommerceCurrency;
  balance: number;
};
