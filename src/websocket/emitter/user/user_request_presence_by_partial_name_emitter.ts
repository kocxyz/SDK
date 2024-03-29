import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserRequestPresenceByPartialNameParameters = {
  partialName: string;
};

export const emitUserRequestPresenceByPartialName: KOCClientEmitter<
  EmitterUserRequestPresenceByPartialNameParameters
> = (client, params) =>
  client.emit({
    type: '_user_request_presence_by_partial_name',
    partial_name: params.partialName,
    restrict_to_persona_namespace: null,
  });
