import { UUID } from "crypto"
import { KOCDatabaseId } from "../../id"
import { KOCEvent } from "../event"
import { KOCCommerceCurrency } from "../../currencies"

export type KOCCommerceInventoryUpdateServerEvent = KOCEvent & {
  type: '_commerce_inventory_update'
  is_full_update: boolean
  user_id: {
    velan: number
  }
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

/**
 * The different equiped items for all the accounts characters.
 * The keys are `<CHARACTER_INDEX>.<EQUIPMENT_TYPE>`
 */
type KOCCommerceInventoryEquipment = {
  [key in `${0 | 1 | 2}.${KOCCommerceInventoryEquipmentTypes}`]: UUID
} |
  {
    [key in `${0 | 1 | 2 | 3}.${KOCCommerceInventoryEquipmentTypes}`]: UUID
  } | {
    [key in `${0 | 1 | 2 | 3 | 4}.${KOCCommerceInventoryEquipmentTypes}`]: UUID
  } | {
    [key in `${0 | 1 | 2 | 3 | 4 | 5}.${KOCCommerceInventoryEquipmentTypes}`]: UUID
  }

type KOCCommerceInventoryEquipmentTypes =
  'k_accessory_type_expression_brag' |
  'k_accessory_type_expression_intro' |
  'k_accessory_type_expression_ko_effect' |
  'k_accessory_type_expression_lose' |
  'k_accessory_type_expression_mvp' |
  'k_accessory_type_expression_taunt' |
  'k_accessory_type_expression_ult_throw_hologram' |
  'k_accessory_type_expression_win' |
  'k_accessory_type_feature_body_type' |
  'k_accessory_type_feature_face' |
  'k_accessory_type_feature_face_eye_color' |
  'k_accessory_type_feature_skin_type' |
  'k_accessory_type_feature_voice' |
  'k_accessory_type_physics_ball' |
  'k_accessory_type_player_icon' |
  'k_accessory_type_style_glasses' |
  'k_accessory_type_style_glider' |
  'k_accessory_type_style_gloves' |
  'k_accessory_type_style_hair' |
  'k_accessory_type_style_hair_color' |
  'k_accessory_type_style_makeup_color' |
  'k_accessory_type_style_outfit'

type KOCCommerceInventoryBalance = {
  entries: KOCCommerceInventoryBalanceEntry[]
}

type KOCCommerceInventoryBalanceEntry = {
  currencyAlias: KOCCommerceCurrency
  balance: number
}