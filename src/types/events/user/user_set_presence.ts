import type { KOCEvent } from '@/types/events/event';
import type { UserPresenceState, UserRichPresenceState } from '@/types/user';

export type KOCUserSetPresenceClientEvent = KOCEvent & {
  type: '_user_set_presence';
  presence_state: UserPresenceState;
  rich_presence_state: UserRichPresenceState;
};
