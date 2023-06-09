import { KOCEmitter } from "../emitter";

type EmitterFriendAcceptRequestParameters = {
  /**
   * The Id of the user who's request to accept.
   */
  userId: number,
}

export const emitFriendAcceptRequest: KOCEmitter<EmitterFriendAcceptRequestParameters> = (client, params) => client.emit({
  type: '_friends_accept_request',
  friend_user_id: {
    velan: params.userId
  },
})