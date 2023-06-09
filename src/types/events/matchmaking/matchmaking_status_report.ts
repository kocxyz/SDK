import { KOCEvent } from "../event"

export type KOCMatchmakingStatusReportServerEvent = KOCEvent & {
  type: '_matchmaking_status_report'
  status: 3
  /**
   * @example "Allocating private server: 13ab5fb2-83d7-4ffb-a556-2cba1e5adeec"
   */
  debug_status: string
}