import { KOCEmitter } from '@/websocket/emitter/emitter';
import { CommerceBalance, CommerceEntry, KOCCommerceInventoryEquipment } from '@/types';

type EmitterCommercePurchaseParameters = {
  entries: CommerceEntry[];
  balance: CommerceBalance;
};

export const emitCommercePurchase: KOCEmitter<EmitterCommercePurchaseParameters> = (client, params) =>
  client.emit({
    type: '_commerce_purchase',
    entries: params.entries,
    balance: params.balance,
  });
