import { KOCEvent } from '@/types/events/event';
import { UUID4Seg } from '@/types/id';

export type KOCContractProgressGetServerEvent = KOCEvent & {
  type: '_get_contract_progress';
  contracts: KOCContract[];
};

type KOCContract = {
  id: number;
  progress: {
    [key: UUID4Seg]: KOCContractProgress;
  };
  page_index: number;
  is_last_page: boolean;
  progress_written: boolean;
};

type KOCContractProgress = [number, number, number, number];
