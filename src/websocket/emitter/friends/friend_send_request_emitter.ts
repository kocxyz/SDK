import { KOCEmitter } from "../emitter";

type EmitterFriendSendRequestParameters = {
  /**
   * The Id of the user who to send the request.
   */
  userId: number,
}

export const emitFriendSendRequest: KOCEmitter<EmitterFriendSendRequestParameters> = (client, params) => client.emit({
  type: '_friends_send_request',
  recipient: {
    velan: params.userId
  },
})