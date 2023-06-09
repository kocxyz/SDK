import { KOCEmitter } from "../emitter";

export const emitCommerceGetCrewInventory: KOCEmitter<void> = (client) => client.emit({
  type: '_commerce_get_crew_inventory',
})