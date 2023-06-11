import { KOCGroupVisibility } from './group';

export type KOCUserId = {
  velan: number;
};

export type KOCPersonaId = {
  privsrv: 0;
};

export type KOCUserPairs = {
  group_visibility: KOCGroupVisibility;
  selected_character_index: 0 | 1 | 2 | 3 | 4 | 5;
};
