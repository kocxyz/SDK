import { KOCUserSettings } from '@/types';
import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPersistenceSetSettingsParameters = {
  settings: Partial<KOCUserSettings>;
};

export const emitUserPersistenceSetSettings: KOCEmitter<EmitterUserPersistenceSetSettingsParameters> = (
  client,
  params,
) =>
  client.emit({
    type: '_persistence_set_user_settings',
    user_settings: params.settings,
  });
