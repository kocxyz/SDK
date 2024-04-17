import { KOCEvent } from '@/types';

export type KOCTeammateDisconnectedGameServerEvent = KOCEvent & {
  type: '_teammate_disconnected';
  players: unknown[];
};
