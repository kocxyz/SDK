import { KOCGroupVisibility } from "../../group"
import { KOCUserId } from "../../user"
import { KOCEvent } from "../event"

export type KOCPersistenceGetUserPairsServerEvent = KOCEvent & {
  type: "_persistence_get_user_pairs",
  full_update: boolean,
  users: UsersEntry[]
}

type UsersEntry = {
  user_id: KOCUserId,
  pairs: {
    equipment_data_initialized: `${number}`,
    last_seen_event_day: `${number}`,
    last_seen_event_week: `${number}`,
    hideout_intro_played: `${number}`,
    last_participated_day: `${number}`,
    last_participated_season_day: `${number}`,
    "season.0.last_rewarded_pass_level": `${number}`,
    region_override: "",
    tutorial_1_complete: `${number}`,
    "tutorial_1_complete.or": `${number}`,
    "tutorial_2_complete.or": `${number}`,
    "tutorial_3_complete.or": `${number}`,
    "tutorial_4_complete.or": `${number}`,
    "tutorial_5_complete.or": `${number}`,
    selected_character_index: `${0 | 1 | 2 | 3 | 4 | 5}`,
    group_visibility?: KOCGroupVisibility
  }
}