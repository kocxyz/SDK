import type { IPAddressWithPort } from '@/types/connection';
import type { KOCEvent } from '@/types/events/event';
import type { UUID5Seg } from '@/types/id';

export type KOCGameServerRegisterGameServerEvent = KOCEvent & {
  type: '_game_server_register';
  /**
   * The UUID of the game server.
   */
  uuid: UUID5Seg;
  /**
   * The IP address and port at which the game server
   * is reachable.
   */
  ip: IPAddressWithPort;
  autodetect_datacenter: string;
  multiplay_server_id: number;
  /**
   * The path where the game server stores logs.
   */
  log: string;
};
