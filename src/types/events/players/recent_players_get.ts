import { UUID } from "crypto"
import { KOCEvent } from "../event"

export type KOCRecentPlayersGetServerEvent = KOCEvent & {
  type: "_recent_players_get",
  full_update: boolean,
  full_list: boolean,
  update: KOCRecentPlayerEntry[]
}

type KOCRecentPlayerEntry = {
  user_id: {
    velan: number
  },
  username: string,
  username_visible: boolean,
  publisher_username: string,
  publisher_username_code: number,
  player_icon: UUID,
  xp: number,
  level: number,
  tier: number,
  persona_id: {
    invalid: number
  },
  last_authenticated_platform: number,
  first_party: unknown[],
  is_in_crew: boolean
}