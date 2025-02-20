import type { KOCEvent } from '@/types/events/event';

export type KOCCrewsContractsGetServerEvent = KOCEvent & {
  type: '_crew_contracts_get';

  incremental: boolean;
  full_update: boolean;
  full_list: boolean;
  full_update_done: boolean;

  contracts: [];
};
