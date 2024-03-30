import type { KOCCommerceRedeemCode } from '@/types';
import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCommerceRedeemCodeParameters = {
  code: KOCCommerceRedeemCode;
};

export const emitCommerceRedeemCode: KOCClientEmitter<EmitterCommerceRedeemCodeParameters> = (client, params) =>
  client.emit({
    type: '_commerce_redeem_code',
    code: params.code,
  });
