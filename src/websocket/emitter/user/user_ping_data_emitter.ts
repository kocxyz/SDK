import type { KOCUserPingDataRegion } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPingDataParameters = {
  regions: KOCUserPingDataRegion[];
};

export const emitUserPingData: KOCClientEmitter<EmitterUserPingDataParameters> = (client, params) =>
  client.emit({
    type: '_user_ping_data',
    regions: params.regions,
  });
