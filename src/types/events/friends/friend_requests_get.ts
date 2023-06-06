import { KOCEvent } from "../event"

export type KOCFriendRequestsGetServerEvent = KOCEvent & {
  type: "_friend_requests_get",
  full_update: boolean,
  full_list: boolean,
  update: []
}