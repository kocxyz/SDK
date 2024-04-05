import { KOCEvent } from '@/types/events/event';
import { UUID4Seg } from '@/types/id';

export type KOCCommerceCrewInventoryUpdateServerEvent = KOCEvent & {
  type: '_commerce_crew_inventory_update';
  entries: CrewInventoryEntry[];
};

type CrewInventoryEntry = {
  guid: UUID4Seg;
  quantity: number;
};
