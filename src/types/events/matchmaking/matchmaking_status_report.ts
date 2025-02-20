import type { KOCEvent } from '@/types/events/event';

export type MatchmakingStatus =
  /**
   * Matchmaking Cancelled
   */
  | 1
  /**
   * Searching for a match
   */
  | 2
  /**
   * Allocating a gameserver
   */
  | 3;

export type KOCMatchmakingStatusReportServerEvent = KOCEvent & {
  type: '_matchmaking_status_report';
  status: MatchmakingStatus;
  /**
   * @example "Allocating private server: 13ab5fb2-83d7-4ffb-a556-2cba1e5adeec"
   */
  debug_status: string;
};
