import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterCrewCreateParameters = {
  name: string;
};

export const emitCrewCreate: KOCEmitter<EmitterCrewCreateParameters> = (client, params) =>
  client.emit({
    type: '_crews_create',
    name: params.name,
  });
