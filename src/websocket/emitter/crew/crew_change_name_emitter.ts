import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewChangeNameParameters = {
  name: string;
};

export const emitCrewChangeName: KOCClientEmitter<EmitterCrewChangeNameParameters> = (client, params) =>
  client.emit({
    type: '_crews_change_name',
    name: params.name,
  });
