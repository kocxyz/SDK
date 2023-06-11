import { KOCDatabaseId } from '../../id';
import { KOCEvent } from '../event';

export type KOCCommerceCrewInventoryUpdateServerEvent = KOCEvent & {
  type: '_commerce_crew_inventory_update';
  entries: CrewInventoryEntry[];
};

type CrewInventoryEntry = {
  guid: KOCDatabaseId;
  quantity: number;
};
