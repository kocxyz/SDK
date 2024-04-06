import { KOCCrew } from '@/types/crew';
import { KOCEvent } from '@/types/events/event';
import { KOCUserId } from '@/types/id';
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
  is_in_crew: true;  

  update?: KOCUser[];
  remove?: {
    user_id: KOCUserId;
  }[];
} & KOCCrew;
