import { KOCEmitter } from "../emitter";

type EmitterFriendRemoveParameters = {
  /**
   * The Id of the user who's lobby to join.
   */
  userId: number,
}

export const emitFriendRemove: KOCEmitter<EmitterFriendRemoveParameters> = (client, params) => client.emit({
  type: '_friends_remove',
  friend_user_id: {
    velan: params.userId
  },
})