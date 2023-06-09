import { KOCEmitter } from "../emitter";

type EmitterGroupKickParameters = {
  /**
   * The Id of the user to kick.
   */
  userId: number,
}

export const emitGroupKick: KOCEmitter<EmitterGroupKickParameters> = (client, params) => client.emit({
  type: '_group_kick',
  user_id: {
    velan: params.userId
  }
})