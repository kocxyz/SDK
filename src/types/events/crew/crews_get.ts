import { KOCEvent } from '@/types/events/event';
import { KOCUserId, UUID5Seg } from '@/types/id';

export type KOCCrewsGetServerEvent = KOCCrewsGetNoCrew | KOCCrewsGetInCrew;

type KOCCrewsGetNoCrew = KOCEvent & {
  type: '_crews_get';
  is_in_crew: false;
};

type KOCCrewsGetInCrew = KOCEvent & {
  type: '_crews_get';
  is_in_crew: true;
  captain: KOCUserId;
  namer: KOCUserId;
  name: string;
  name_visible: boolean;
  uuid: UUID5Seg;
  crew_code: number;
  crew_banner: UUID5Seg;
  full_update: boolean;
  full_list: boolean;
  update: unknown[];
};
