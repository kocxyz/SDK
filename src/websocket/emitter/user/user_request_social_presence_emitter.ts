import type { KOCEmitter } from "../emitter";

export const emitUserRequestSocialPresence: KOCEmitter<void> = (client) => client.emit({
  type: '_user_request_social_presence',
  velan_friends: true
})