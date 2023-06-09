import { KOCEmitter } from "../emitter";

type EmitterCrewRejectJoinRequestParameters = {
  userId: number
}

export const emitCrewRejectJoinRequest: KOCEmitter<EmitterCrewRejectJoinRequestParameters> = (client, params) => client.emit({
  type: '_crews_reject_join_request',
  user_id: {
    velan: params.userId
  }
})