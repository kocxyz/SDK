import { KOCEvent } from "@/types/events/event";
import { KOCUserId, UUID5Seg } from "@/types/id";

type KOCBrawler = {
  user_id: KOCUserId;
  username: string;
  username_visible: boolean;
  publisher_username: string;
  publisher_username_code: number;
  player_icon: UUID5Seg;
  xp: number;
};

export type KOCPresenceLookupGetServerEvent = KOCEvent & {
  type: '_presence_lookup_get';
  partial_name: string;
  update: KOCBrawler[];
};
