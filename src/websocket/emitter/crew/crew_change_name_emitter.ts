import { KOCEmitter } from "../emitter";

type EmitterCrewChangeNameParameters = {
  name: string
}

export const emitCrewChangeName: KOCEmitter<EmitterCrewChangeNameParameters> = (client, params) => client.emit({
  type: '_crews_change_name',
  name: params.name,
})