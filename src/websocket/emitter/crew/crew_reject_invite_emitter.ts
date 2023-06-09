import { KOCEmitter } from "../emitter";

type EmitterCrewRejectInviteParameters = {
  userId: number
}

export const emitCrewRejectInvite: KOCEmitter<EmitterCrewRejectInviteParameters> = (client, params) => client.emit({
  type: '_crews_reject_invite',
  user_id: {
    velan: params.userId
  }
})