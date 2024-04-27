import { KOCEvent, KOCUserId } from '@/types';

export type KOCTeammateDisconnectedGameServerEvent = KOCEvent & {
  type: '_teammate_disconnected';
  players: KOCUserId[];
};
