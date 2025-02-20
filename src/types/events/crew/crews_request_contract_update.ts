import type { KOCEvent } from '@/types/events/event';

export type KOCCrewsRequestContractUpdateGameServerEvent = KOCEvent & {
  type: '_crews_request_contract_update';
};
