import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

export const emitUserRequestSocialPresence: KOCClientEmitter<void> = (client) =>
  client.emit({
    type: '_user_request_social_presence',
    velan_friends: true,
  });
