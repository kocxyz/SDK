import { KOCEvent } from '@/types/events/event';

/**
 * A list of common errors that can occur in Knockout City.
 *
 * 0.36#-8007: Temporary loss of connection with the server (reconnecting)
 * 1.41#-8008: Server not reachable
 * 1.143#0: Connection closed
 */

/**
 * Event that is sent when an error occurs.
 *
 * Error codes are formated as follows:
 * `{level}.{code}#{system_code}`
 */
export type KOCErrorServerEvent = KOCEvent & {
  type: '_error';
  action: ErrorAction;
  level: ErrorLevel;
  code: ErrorCode;
  system_code: ErrorSystemCode;
  message: string;
};

export type ErrorLevel = number;

export type ErrorCode =
  // Crew Error | There was an error trying to joining the Crew. Please try again later.
  | 14
  // Network Error (Group) | An error occured joining the Group. Please try again later.
  | 20
  // Blocked Player (Group) | This group contains a player that you have blocked. Cannot join the group.
  | 21
  // Group unavailable (Group) | The groups privacy settings do not allow this action, or the group is temporarily unavailable. Please try again later.
  | 24
  // Group full (Group) | The group is already full. The maximum group size is 8 players.
  | 25
  // Network Error | Unable to connect to server
  | 27
  // Network Error (Playlist) | The selected playlist is not available
  | 28
  // Network Error (Update Required) | You do not have the most recent verison of Knockout City. Please update the game an try again.
  | 30
  // Network Error (Privacy Mismatch) | This action is not allowed because one or more players have crossplay disabled.
  | 37
  // Network Error | Sorry but you do not meet minumum requirements to access online features.
  | 50
  // Account | Duplicate Login detected.
  | 141;

export type ErrorAction =
  // Small banner at the top left of the screen with the error codes
  | 1
  // Display a popup with the error
  | 2
  // Exit to the main menu (non recoverable error)
  | 3;

export type ErrorSystemCode = number;
