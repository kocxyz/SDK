import { KOCDatabaseId } from '../../id';
import { KOCEvent } from '../event';
import { KOCCommerceCurrency } from '../../currencies';

export type KOCCommerceCatalogUpdateServerEvent = KOCEvent & {
  type: '_commerce_catalog_update';
  offers: {
    [key: KOCDatabaseId]:
      | KOCCommerceCatalogOfferCurrencyAndItems
      | KOCCommerceCatalogOfferCurrency
      | KOCCommerceCatalogOfferItems;
  };
};

/**
 * A generic offer
 */
type KOCCommerceCatalogOffer = {
  items?: {
    [key: KOCDatabaseId]: number;
  };
  currencies?: {
    [key in KOCCommerceCatalogCurrency]?: number;
  };
  price: {
    default: {
      [key in KOCCommerceCatalogPrice]?: number;
    };
  };
};

/**
 * And offer containing both items as well as another currency.
 */
type KOCCommerceCatalogOfferCurrencyAndItems = {
  items: {
    [key: KOCDatabaseId]: number;
  };
  currencies: {
    [key in KOCCommerceCatalogCurrency]?: number;
  };
  price: {
    default: {
      [key in KOCCommerceCatalogPrice]?: number;
    };
  };
};

/**
 * And offer that only contains another type of currency.
 * Basically an offer for currency conversion.
 */
type KOCCommerceCatalogOfferCurrency = KOCCommerceCatalogOffer & {
  currencies: {
    [key in KOCCommerceCatalogCurrency]?: number;
  };
  price: {
    default: {
      [key in KOCCommerceCatalogPrice]?: number;
    };
  };
};

/**
 * And offer that only contains items
 */
type KOCCommerceCatalogOfferItems = KOCCommerceCatalogOffer & {
  items?: {
    [key: KOCDatabaseId]: number;
  };
  price: {
    default: {
      [key in KOCCommerceCatalogPrice]?: number;
    };
  };
};

/**
 * The type of currency one gets with the offer
 */
type KOCCommerceCatalogCurrency = Extract<KOCCommerceCurrency, 'VAR' | 'CUR'>;

/**
 * The type of currency used to pay
 */
type KOCCommerceCatalogPrice = Extract<KOCCommerceCurrency, 'CUR' | 'CUR_HW' | 'CUR_HR' | 'CUR_HOLOWEEN'>;
