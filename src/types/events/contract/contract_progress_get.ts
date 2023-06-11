import { KOCDatabaseId } from '../../id';
import { KOCEvent } from '../event';

export type KOCContractProgressGetServerEvent = KOCEvent & {
  type: '_get_contract_progress';
  contracts: KOCContract[];
};

type KOCContract = {
  id: number;
  progress: {
    [key: KOCDatabaseId]: KOCContractProgress;
  };
  page_index: number;
  is_last_page: boolean;
  progress_written: boolean;
};

type KOCContractProgress = [number, number, number, number];
