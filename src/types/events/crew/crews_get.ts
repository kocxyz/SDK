import { KOCCrew } from '@/types/crew';
import { KOCEvent } from '@/types/events/event';
import { KOCUser } from '@/types/user';

export type KOCCrewsGetServerEvent = KOCCrewsGetNoCrew | KOCCrewsGetInCrew;

type KOCCrewsGetNoCrew = KOCEvent & {
  type: '_crews_get';
  is_in_crew: false;
};

type KOCCrewsGetInCrew = KOCEvent & {
  type: '_crews_get';
  full_update: boolean;
  full_list: boolean;

  update: KOCUser[];
} & KOCCrew;
