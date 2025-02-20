import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId, UUID5Seg } from '@/types/id';

export type KOCCommerceSetConsumablesGameServerEvent = KOCEvent & {
  type: '_commerce_set_consumables';
  user_id: KOCUserId;
  entries: KOCCommerceSetConsumableEntry[];
};

export type KOCCommerceSetConsumableEntry = {
  itemId: UUID5Seg;
  ops: KOCCommerceSetConsumableOpEntry[];
};

export type KOCCommerceSetConsumableOpEntry = {
  path: KOCCommerceSetConsumablePath;
  value: `${number}`;
  op: KOCCommerceSetConsumableOp;
};

export type KOCCommerceSetConsumablePath = '/itemCount';

export type KOCCommerceSetConsumableOp = 'set';
