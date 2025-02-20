import type { KOCClientEvent, KOCServerEvent } from '@/types';
import type { KOCWebsocketWrapper } from '@/websocket/wrapper';

export type KOCClientEmitter<Parameters> = (
  client: KOCWebsocketWrapper<KOCServerEvent, KOCClientEvent>,
  params: Parameters,
) => Promise<void>;

export type KOCServerEmitter<Parameters> = (
  client: KOCWebsocketWrapper<KOCClientEvent, KOCServerEvent>,
  params: Parameters,
) => Promise<void>;
