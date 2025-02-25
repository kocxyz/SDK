import { KOCAPIClient } from "@/api/client";
import type { UUID5Seg } from "@/types";
import type { AxiosResponse } from "axios";

type GameServerSendReponse = {
  success: boolean;
};

export const sendGameServerScriptEvent = (
  client: KOCAPIClient,
  gameserver_uuid: UUID5Seg,
  script_event_name: string,
  /**
   * The arguments to pass to the script event
   *
   * Have to be in a comma separated string format
   * e.g.: int=0,int=20
   */
  args: string,
): Promise<AxiosResponse<GameServerSendReponse>> =>
  client.post<GameServerSendReponse>("/api/game-server-send", {
    game_server_uuid: gameserver_uuid,
    event_name: script_event_name,
    args,
  });
