import { KOCEvent, KOCUserId, UUID4Seg } from '@/types';

/**
 * An event can be emitted to redeem a code.
 */
export type KOCCommerceRandomDurablesGrantedServerEvent = KOCEvent & {
  type: '_commerce_random_durables_granted';
  user_id: KOCUserId;
  durables: UUID4Seg[];
  consumables: { [key: UUID4Seg]: number }[];
};