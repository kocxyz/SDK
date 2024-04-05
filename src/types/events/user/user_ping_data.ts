import { IPAddress } from '@/types/connection';
import { KOCEvent } from '@/types/events/event';

export type KOCUserPingDataRegion = {
  id: string;
  sites: KOCUserPingDataSite[];
};

export type KOCUserPingDataSite = {
  ip: IPAddress;
  min: number;
  avg: number;
  max: number;
};

export type KOCUserPingDataClientEvent = KOCEvent & {
  type: '_user_ping_data';
  regions: KOCUserPingDataRegion[];
};
