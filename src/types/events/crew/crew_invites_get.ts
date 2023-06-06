import { KOCEvent } from "../event"

export type KOCCrewInvitesGetServerEvent = KOCEvent & {
  type: "_crew_invites_get",
  full_update: true,
  full_list: true,
  update: []
}