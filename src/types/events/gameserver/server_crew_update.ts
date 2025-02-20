import type { KOCCrew } from '@/types/crew';
import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

export type KOCServerCrewUpdateServerEvent = KOCEvent & {
  type: '_server_crew_update';
  full_update: boolean;
  full_list: boolean;
  crews: (KOCCrew & { user_id: KOCUserId })[];
};
