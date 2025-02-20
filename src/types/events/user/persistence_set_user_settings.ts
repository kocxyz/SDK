import type { KOCEvent } from '@/types/events/event';
import type { KOCUserSettings } from '@/types/user_settings';

export type KOCPersistenceSetUserSettingsClientEvent = KOCEvent & {
  type: '_persistence_set_user_settings';
  user_settings: Partial<KOCUserSettings>;
};
