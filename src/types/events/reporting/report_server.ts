import type { IPAddressWithPort } from '@/types/connection';
import type { KOCEvent } from '@/types/events/event';
import type { UUID5Seg } from '@/types/id';

export type KOCReportServerClientEvent = KOCEvent & {
  type: '_report_server';

  server_id: number;
  server_uuid: UUID5Seg;
  server_region: UUID5Seg;
  server_ip: IPAddressWithPort;
  manual_region: boolean;

  qos_ping: string;
  qos_detail: string;
};
