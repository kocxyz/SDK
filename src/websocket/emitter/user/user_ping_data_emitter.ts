import { KOCUserPingDataRegion } from "../../../types/events";
import { KOCEmitter } from "../emitter";

type EmitterUserPingDataParameters = {
  regions: KOCUserPingDataRegion[]
}

export const emitUserPingData: KOCEmitter<EmitterUserPingDataParameters> = (client, params) => client.emit({
  type: '_user_ping_data',
  regions: params.regions
})