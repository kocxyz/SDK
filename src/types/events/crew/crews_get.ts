import type { KOCCrew } from '@/types/crew';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';
import type { KOCUser } from '@/types/user';

export type KOCCrewsGetServerEvent = KOCCrewsGetNoCrew | KOCCrewsGetInCrew;

type KOCCrewsGetNoCrew = KOCEvent & {
  type: '_crews_get';
  is_in_crew: false;
};

type KOCCrewsGetInCrew = KOCEvent & {
  type: '_crews_get';
  full_update: boolean;
  full_list: boolean;
  is_in_crew: true;

  update?: KOCUser[];
  remove?: {
    user_id: KOCUserId;
  }[];
} & KOCCrew;
