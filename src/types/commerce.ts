import { KOCDatabaseId } from './id';

/**
 * The different equiped items for all the accounts characters.
 * The keys are `<CHARACTER_INDEX>.<EQUIPMENT_TYPE>`
 */
export type KOCCommerceInventoryEquipment =
  | {
      [key in `${0 | 1 | 2}.${KOCCommerceInventoryEquipmentTypes}`]: KOCDatabaseId;
    }
  | {
      [key in `${0 | 1 | 2 | 3}.${KOCCommerceInventoryEquipmentTypes}`]: KOCDatabaseId;
    }
  | {
      [key in `${0 | 1 | 2 | 3 | 4}.${KOCCommerceInventoryEquipmentTypes}`]: KOCDatabaseId;
    }
  | {
      [key in `${0 | 1 | 2 | 3 | 4 | 5}.${KOCCommerceInventoryEquipmentTypes}`]: KOCDatabaseId;
    };

export type KOCCommerceInventoryEquipmentTypes =
  | 'k_accessory_type_expression_brag'
  | 'k_accessory_type_expression_intro'
  | 'k_accessory_type_expression_ko_effect'
  | 'k_accessory_type_expression_lose'
  | 'k_accessory_type_expression_mvp'
  | 'k_accessory_type_expression_taunt'
  | 'k_accessory_type_expression_ult_throw_hologram'
  | 'k_accessory_type_expression_win'
  | 'k_accessory_type_feature_body_type'
  | 'k_accessory_type_feature_face'
  | 'k_accessory_type_feature_face_eye_color'
  | 'k_accessory_type_feature_skin_type'
  | 'k_accessory_type_feature_voice'
  | 'k_accessory_type_physics_ball'
  | 'k_accessory_type_player_icon'
  | 'k_accessory_type_style_glasses'
  | 'k_accessory_type_style_glider'
  | 'k_accessory_type_style_gloves'
  | 'k_accessory_type_style_hair'
  | 'k_accessory_type_style_hair_color'
  | 'k_accessory_type_style_makeup_color'
  | 'k_accessory_type_style_outfit';
