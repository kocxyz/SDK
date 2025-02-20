import type { UUID5Seg } from '@/types/id';
import type { IPAddress } from './connection';

export type KOCServerRegion = {
  region_id: UUID5Seg;
  multiplay_locationid: number;
  ip_addresses: IPAddress[];
  port: number;
  no_ping: boolean;
  active: boolean;
  location_active: boolean;
  velan_region_name: string;
  region_name: string;
};
