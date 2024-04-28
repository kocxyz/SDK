import { KOCEvent } from '@/types/events/event';
import { UUID4Seg } from '@/types/id';
import { Platform } from '@/types/platform';

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
  /** Rewards awarded */
  | 3;
export type KOCContractProgress = [state: KOCContractState, value: number, stage: number, platform: Platform];
