import type { KOCEvent } from '@/types/events/event';
import type { UUID4Seg } from '@/types/id';
import type { Platform } from '@/types/platform';

export type KOCContractProgressGetServerEvent = KOCEvent & {
  type: '_get_contract_progress';
  contracts: KOCContract[];
  page_index: number;
  is_last_page: boolean;
  progress_written: boolean;
};

export type KOCContract = {
  id: number;
  progress: {
    [key: UUID4Seg]: KOCContractProgress;
  };
};
export type KOCContractState =
  /** In Progress */
  | 1
  /** Completed */
  | 2
  /** Stage rewarded (has to be used for multi stage contracts, else the game fill freeze) */
  | 3
  /** All Stages rewarded (mostly used for single stage contracts) */
  | 5;
export type KOCContractProgress = [state: KOCContractState, value: number, stage: number, platform: Platform];
