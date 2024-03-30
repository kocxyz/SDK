import { KOCGroupVisibility } from './group';

export type KOCUserId = {
  velan: number;
};

export type KOCPersonaId = {
  privsrv: 0;
};

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
