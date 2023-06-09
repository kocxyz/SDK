import { KOCEvent } from "../event"

export type PresenceState =
  // Appear Offline
  | 1
  // Online (Rich Presence has no effect)
  | 2
  // Not Joinable
  | 3
  // Joinable but full?
  // Get emitted with -1 Rich Presence
  | 4
  // Joinable
  | 5
  // ?
  | 6

export type RichPresenceState =
  // TODO: No clue what that means yet
  | -1
  // Hideout (Solo)
  | 0
  // Hideout (Group)
  | 1
  // Street Play (Solo)
  | 2
  // Street Play (Group)
  | 3
  // League Play (Solo)
  | 4
  // League Play (Group)
  | 5
  // Private Match (Solo)
  | 6
  // Private Match (Group)
  | 7
  // Training (Solo)
  | 8
  // Training (Group)
  | 9

export type KOCUserSetPresenceClientEvent = KOCEvent & {
  type: '_user_set_presence',
  presence_state: PresenceState
  rich_presence_state: RichPresenceState
}