import { KOCEvent } from '@/types/events/event';

export type KOCErrorServerEvent = KOCEvent & {
  type: '_error';
  level: ErrorLevel;
  code: ErrorCode;
  action: ErrorAction;
  system_code: ErrorSystemCode;
  message: string;
};

export type ErrorLevel =
  // ?
  13;

export type ErrorCode =
  // ?
  | 20
  // Not enough permissions / Do not have a valid invite to join the invite-only group??
  | 24;

export type ErrorAction =
  // ?
  2;

export type ErrorSystemCode =
  // ?
  | 1
  // Not enough permissions / Do not have a valid invite to join the invite-only group??
  | 9;
