import { KOCUserPingDataRegion } from '@/types';
import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPingDataParameters = {
  regions: KOCUserPingDataRegion[];
};

export const emitUserPingData: KOCClientEmitter<EmitterUserPingDataParameters> = (client, params) =>
  client.emit({
    type: '_user_ping_data',
    regions: params.regions,
  });
