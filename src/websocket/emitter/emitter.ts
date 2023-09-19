import type { KOCWebsocketClient } from '@/websocket/client';

export type KOCEmitter<Parameters> = (client: KOCWebsocketClient, params: Parameters) => Promise<void>;
