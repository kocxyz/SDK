import { KOCUserPingDataRegion } from '@/types';
import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPingDataParameters = {
  regions: KOCUserPingDataRegion[];
};

export const emitUserPingData: KOCEmitter<EmitterUserPingDataParameters> = (client, params) =>
  client.emit({
    type: '_user_ping_data',
    regions: params.regions,
  });
