import { KOCClientEmitter } from '@/websocket/emitter/emitter';
import { CommerceBalance, CommerceEntry, KOCClientEvent, KOCServerEvent } from '@/types';
import { KOCWebsocketWrapper } from '@/websocket/wrapper';

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
