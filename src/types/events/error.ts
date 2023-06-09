import { KOCEvent } from "./event"

export type KOCErrorServerEvent = KOCEvent & {
  type: '_error',
  level: ErrorLevel
  code: ErrorCode
  action: ErrorAction
  system_code: ErrorSystemCode
  message: string
}

type ErrorLevel =
  // ?
  | 13

type ErrorCode =
  // ?
  | 20

type ErrorAction =
  // ?
  | 2

type ErrorSystemCode =
  // ?
  | 1