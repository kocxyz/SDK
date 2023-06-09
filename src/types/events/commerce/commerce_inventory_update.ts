import { UUID } from "crypto"
import { KOCDatabaseId } from "../../id"
import { KOCEvent } from "../event"
import { KOCCommerceCurrency } from "../../currencies"
import { KOCUserId } from "../../user"
import { KOCCommerceInventoryEquipment } from "../../commerce"

export type KOCCommerceInventoryUpdateServerEvent = KOCEvent & {
  type: '_commerce_inventory_update'
  is_full_update: boolean
  user_id: KOCUserId
  /**
   * The items the account owns
   */
  items: {
    /**
     * The different non-consumables like clothing, effects, animations, ... the account owns
     */
    durables: KOCDatabaseId[]
    favourites: number,
    /**
     * The different consumables the account owns
     */
    consumables: KOCCommerceInventoryConsumable[]
  },
  /**
   * The equiped items for all the characters
   */
  equipment: KOCCommerceInventoryEquipment
  /**
   * The balance of the account
   */
  balance: KOCCommerceInventoryBalance
}

type KOCCommerceInventoryConsumable = {
  [key: KOCDatabaseId]: number,
  id: UUID
}

type KOCCommerceInventoryBalance = {
  entries: KOCCommerceInventoryBalanceEntry[]
}

type KOCCommerceInventoryBalanceEntry = {
  currencyAlias: KOCCommerceCurrency
  balance: number
}