import { KOCEvent } from "../event"

export type PresenceState = 5;
export type RichPresenceState = 0;

export type KOCUserSetPresenceClientEvent = KOCEvent & {
  type: '_user_set_presence',
  presence_state: PresenceState
  rich_presence_state: RichPresenceState
}