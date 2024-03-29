import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewCreateParameters = {
  name: string;
};

export const emitCrewCreate: KOCClientEmitter<EmitterCrewCreateParameters> = (client, params) =>
  client.emit({
    type: '_crews_create',
    name: params.name,
  });
