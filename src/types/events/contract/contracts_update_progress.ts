import { KOCEvent, KOCUserId, UUID5Seg, Platform } from '@/types';

export type KOCContractsUpdateProgressGameServerEvent = KOCEvent & {
  type: '_contracts_update_progress';
  contracts: KOCContractProgressUpdate[];
};

type KOCContractProgressUpdate = {
  user_id: KOCUserId;
  contract_guid: UUID5Seg;
  contract_stage: number;
  contract_platform: Platform;
  progress_increase: number;
  write_state: 2;
  debug_progress: boolean;
};
