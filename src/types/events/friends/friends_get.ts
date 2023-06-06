import { UUID } from "crypto"
import { KOCEvent } from "../event"

export type KOCFriendsGetServerEvent = KOCEvent & {
  type: "_friends_get",
  full_update: boolean,
  full_list: boolean,
  update: KOCFriendEntry[]
}

type KOCFriendEntry = {
  user_id: {
    velan: number
  },
  first_party: [],
  username: string,
  publisher_username: string,
  publisher_username_code: number,
  username_visible: boolean,
  player_icon: UUID,
  xp: number,
  online_state: number,
  rich_presence: number,
  group_size: number,
  last_authenticated_platform: number,
  is_in_crew: boolean
}