import { UUID } from 'crypto';
import { KOCUserId } from '@/types';
import { KOCEvent } from '../event';

type KOCBrawler = {
  user_id: KOCUserId;
  username: string;
  username_visible: boolean;
  publisher_username: string;
  publisher_username_code: number;
  player_icon: UUID;
  xp: number;
};

export type KOCPresenceLookupGetServerEvent = KOCEvent & {
  type: '_presence_lookup_get';
  partial_name: string;
  update: KOCBrawler[];
};
