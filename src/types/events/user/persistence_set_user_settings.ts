import { KOCEvent } from '@/types/events/event';
import { KOCUserSettings } from '@/types/user_settings';

export type KOCPersistenceSetUserSettingsClientEvent = KOCEvent & {
  type: '_persistence_set_user_settings';
  user_settings: Partial<KOCUserSettings>;
};
