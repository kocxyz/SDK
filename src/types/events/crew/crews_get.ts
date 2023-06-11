import { UUID } from 'crypto';
import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

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
  uuid: UUID;
  crew_code: number;
  crew_banner: UUID;
  full_update: boolean;
  full_list: boolean;
  update: unknown[];
};
