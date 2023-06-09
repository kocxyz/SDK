import { KOCEmitter } from "../emitter";

type EmitterCrewSendInviteParameters = {
  userId: number
}

export const emitCrewSendInvite: KOCEmitter<EmitterCrewSendInviteParameters> = (client, params) => client.emit({
  type: '_crews_send_invite',
  user_id: {
    velan: params.userId
  }
})