import type { CommerceBalance, CommerceEntry } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCommercePurchaseParameters = {
  entries: CommerceEntry[];
  balance: CommerceBalance;
};

export const emitCommercePurchase: KOCClientEmitter<EmitterCommercePurchaseParameters> = (client, params) =>
  client.emit({
    type: '_commerce_purchase',
    entries: params.entries,
    balance: params.balance,
  });
