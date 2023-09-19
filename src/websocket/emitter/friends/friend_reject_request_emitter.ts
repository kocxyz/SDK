import { KOCEmitter } from '@/websocket/emitter/emitter';

type EmitterFriendRejectRequestParameters = {
  /**
   * The Id of the user who 's request to reject.
   */
  userId: number;
};

export const emitFriendRejectRequest: KOCEmitter<EmitterFriendRejectRequestParameters> = (client, params) =>
  client.emit({
    type: '_friends_reject_request',
    friend_user_id: {
      velan: params.userId,
    },
  });
