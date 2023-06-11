import { KOCUserSettings } from '../../user_settings';
import { KOCEvent } from '../event';

export type KOCPersistenceSetUserSettingsClientEvent = KOCEvent & {
  type: '_persistence_set_user_settings';
  user_settings: Partial<KOCUserSettings>;
};
