import { KOCUserSettings } from '@/types';
import { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPersistenceSetSettingsParameters = {
  settings: Partial<KOCUserSettings>;
};

export const emitUserPersistenceSetSettings: KOCClientEmitter<EmitterUserPersistenceSetSettingsParameters> = (
  client,
  params,
) =>
  client.emit({
    type: '_persistence_set_user_settings',
    user_settings: params.settings,
  });
