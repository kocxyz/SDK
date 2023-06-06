import type { KOCWebsocketClient } from "../client";

export type KOCEmitter<Parameters> = (client: KOCWebsocketClient, params: Parameters) => Promise<void>