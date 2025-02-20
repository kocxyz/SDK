import type { KOCEvent, KOCUserId, Platform, UUID5Seg } from '@/types';

export type KOCContractsUpdateProgressGameServerEvent = KOCEvent & {
  type: '_contracts_update_progress';
  contracts: KOCContractProgressUpdate[];
};

export type KOCContractProgressUpdate = {
  user_id: KOCUserId;
  contract_guid: UUID5Seg;
  contract_stage: number;
  contract_platform: Platform;
  progress_increase: number;
  write_state: KOCContractWriteState;
  debug_progress: boolean;
};

export type KOCContractWriteState =
  /** Update */
  | 1
  /** Create */
  | 2;
