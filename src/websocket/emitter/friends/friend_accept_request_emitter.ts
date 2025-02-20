import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterFriendAcceptRequestParameters = {
  /**
   * The Id of the user who's request to accept.
   */
  userId: number;
};

export const emitFriendAcceptRequest: KOCClientEmitter<EmitterFriendAcceptRequestParameters> = (client, params) =>
  client.emit({
    type: '_friends_accept_request',
    friend_user_id: {
      velan: params.userId,
    },
  });
