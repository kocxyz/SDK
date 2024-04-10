import { KOCCrew } from '@/types/crew';
import { KOCGroupSize, KOCGroupVisibility } from '@/types/group';
import { KOCUserId, UUID5Seg } from '@/types/id';
import { Platform } from '@/types/platform';

export type UserPresenceState =
  // Appear Offline
  | 1
  // Online (Rich Presence has no effect)
  | 2
  // Not Joinable
  | 3
  // Joinable but full?
  // Get emitted with -1 Rich Presence
  | 4
  // Joinable
  | 5
  // ?
  | 6;

export type UserRichPresenceState =
  // TODO: No clue what that means yet
  | -1
  // Hideout (Solo)
  | 0
  // Hideout (Group)
  | 1
  // Street Play (Solo)
  | 2
  // Street Play (Group)
  | 3
  // League Play (Solo)
  | 4
  // League Play (Group)
  | 5
  // Private Match (Solo)
  | 6
  // Private Match (Group)
  | 7
  // Training (Solo)
  | 8
  // Training (Group)
  | 9;

export type KOCUser = KOCUserInCrew | KOCUserNotInCrew;

export type KOCBaseUser = {
  /**
   * The user's ID.
   */
  user_id: KOCUserId;
  /**
   * The user's username.
   */
  username: string;
  /**
   * Weather the user's username is visible.
   * If false, the user's username will be replaced with ****.
   */
  username_visible: boolean;
  /**
   * The user's publisher username.
   * In the private server version this is quite irrelevant since
   * it should always be equal to the username.
   */
  publisher_username: string;
  /**
   * The users code (#XXXX) on the publisher platform.
   * If "0" the code will be hidden in the client.
   */
  publisher_username_code: number;
  /**
   * The UUID of the user's avatar icon.
   */
  player_icon: UUID5Seg;
  /**
   * The Experience Points that the user currently has.
   * With this number the client calculates the users level
   * and displays it accordignly.
   */
  xp: number;
  /**
   * The presence state of the user.
   * Represents the online status / state.
   */
  online_state: UserPresenceState;
  /**
   * The rich presence state of the user.
   * Represents the current activity of the user.
   */
  rich_presence: UserRichPresenceState;
  /**
   * The user's last platform they authenticated against.
   */
  last_authenticated_platform: Platform;
  /**
   * The size of the group the user is currently in.
   */
  group_size: KOCGroupSize;
};

export type KOCUserNotInCrew = KOCBaseUser & {
  /**
   * Incidates if the user is in a crew.
   */
  is_in_crew: false;
};

export type KOCUserInCrew = KOCBaseUser & {
  /**
   * Incidates if the user is in a crew.
   */
  is_in_crew: true;
} & KOCCrew;

export type KOCUserPairs = {
  equipment_data_initialized: `${number}`;
  last_seen_event_day: `${number}`;
  last_seen_event_week: `${number}`;
  hideout_intro_played: `${number}`;
  last_participated_day: `${number}`;
  last_participated_season_day: `${number}`;
  'season.0.last_rewarded_pass_level': `${number}`;
  region_override: '';
  tutorial_1_complete: `${number}`;
  'tutorial_1_complete.or': `${number}`;
  'tutorial_2_complete.or': `${number}`;
  'tutorial_3_complete.or': `${number}`;
  'tutorial_4_complete.or': `${number}`;
  'tutorial_5_complete.or': `${number}`;
  selected_character_index: `${0 | 1 | 2 | 3 | 4 | 5}`;
  group_visibility: KOCGroupVisibility;
};

export type KOCUserSkill = {
  mmr: number;
  skill_rating: number;
  skill_rating_decayed: number;
  volatility: number;
  tier: number;
  division: number;
  division_progress: number;
  win_streak: number;
  season: number;
  total_games_played: number;
  wins: number;
  mvps: number;
  current_mmr: number;
  current_tier: number;
  current_division: number;
  current_division_progress: number;
};
