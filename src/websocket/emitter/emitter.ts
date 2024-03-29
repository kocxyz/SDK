import { KOCWebsocketWrapper } from '../wrapper';
import { KOCClientEvent, KOCServerEvent } from '@/types';

export type KOCClientEmitter<Parameters> = (
  client: KOCWebsocketWrapper<KOCServerEvent, KOCClientEvent>,
  params: Parameters,
) => Promise<void>;

export type KOCServerEmitter<Parameters> = (
  client: KOCWebsocketWrapper<KOCClientEvent, KOCServerEvent>,
  params: Parameters,
) => Promise<void>;
