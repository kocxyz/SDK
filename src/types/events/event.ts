import type * as KOCEvents from '.';

export type KOCEvent = {
  type: `_${string}`;
};

export type KOCClientEvent =
  // Block
  | KOCEvents.KOCBlockPlayerClientEvent
  | KOCEvents.KOCUnblockPlayerClientEvent
  // Commerce
  | KOCEvents.KOCCommerceGetCrewInventoryClientEvent
  | KOCEvents.KOCCommerceInventoryEquipClientEvent
  // Crew
  | KOCEvents.KOCCrewRequestInfoClientEvent
  | KOCEvents.KOCCrewsAcceptInviteClientEvent
  | KOCEvents.KOCCrewsAcceptJoinRequestClientEvent
  | KOCEvents.KOCCrewsChangeNameClientEvent
  | KOCEvents.KOCCrewsCreateClientEvent
  | KOCEvents.KOCCrewsLeaveClientEvent
  | KOCEvents.KOCCrewsRejectInviteClientEvent
  | KOCEvents.KOCCrewsRejectJoinRequestClientEvent
  | KOCEvents.KOCCrewsSendInviteClientEvent
  | KOCEvents.KOCCrewsSendJoinRequestClientEvent
  // Friends
  | KOCEvents.KOCFriendsAcceptRequestClientEvent
  | KOCEvents.KOCFriendsRejectRequestClientEvent
  | KOCEvents.KOCFriendsRemoveClientEvent
  | KOCEvents.KOCFriendsSendRequestClientEvent
  // Group
  | KOCEvents.KOCGroupJoinClientEvent
  | KOCEvents.KOCGroupKickClientEvent
  | KOCEvents.KOCGroupPromoteLeaderClientEvent
  // Matchmaking
  | KOCEvents.KOCMatchmakingStartGameSearchClientEvent
  // Relay
  | KOCEvents.KOCRelayClientEvent
  // User
  | KOCEvents.KOCPersistenceSetUserPairsClientEvent
  | KOCEvents.KOCPersistenceSetUserSettingsClientEvent
  | KOCEvents.KOCUserPingDataClientEvent
  | KOCEvents.KOCUserSetPresenceClientEvent
  | KOCEvents.KOCUserRequestSocialPresenceClientEvent
  | KOCEvents.KOCUserRequestPresenceByPartialNameClientEvent
  | KOCEvents.KOCUserRequestPlaylistUpdateClientEvent;

export type KOCServerEvent =
  // Blocks
  | KOCEvents.KOCBlocksGetServerEvent
  // Brawl Pass
  | KOCEvents.KOCBrawlPassGetServerEvent
  // Cohorts
  | KOCEvents.KOCCohortsServerEvent
  // Commerce
  | KOCEvents.KOCCommerceCatalogUpdateServerEvent
  | KOCEvents.KOCCommerceCrewInventoryUpdateServerEvent
  | KOCEvents.KOCCommerceInventoryUpdateServerEvent
  // Contract
  | KOCEvents.KOCContractProgressGetServerEvent
  // Crew
  | KOCEvents.KOCCrewsGetServerEvent
  | KOCEvents.KOCCrewJoinRequestsGetServerEvent
  | KOCEvents.KOCCrewsSearchResultServerEvent
  | KOCEvents.KOCCrewInvitesGetServerEvent
  // Friends
  | KOCEvents.KOCFriendsGetServerEvent
  | KOCEvents.KOCFriendRequestsGetServerEvent
  // Groups
  | KOCEvents.KOCGroupGetServerEvent
  | KOCEvents.KOCGroupKickedServerEvent
  | KOCEvents.KOCGroupLeftServerEvent
  // Matchmaking
  | KOCEvents.KOCMatchmakingAdvertiseServerServerEvent
  | KOCEvents.KOCMatchmakingStatusReportServerEvent
  // News
  | KOCEvents.KOCNewsServerEvent
  // Ping
  | KOCEvents.KOCPingDisplayValuesServerEvent
  // Players
  | KOCEvents.KOCRecentPlayersGetServerEvent
  // Replay
  | KOCEvents.KOCRelayServerEvent
  // Street Rank
  | KOCEvents.KOCStreetRankUpdateServerEvent
  // User
  | KOCEvents.KOCSetUserQuitPenaltyServerEvent
  | KOCEvents.KOCPersistenceGetUserPairsServerEvent
  | KOCEvents.KOCPresenceLookupGetServerEvent
  // Error
  | KOCEvents.KOCErrorServerEvent
  // Welcome
  | KOCEvents.KOCWelcomeServerEvent;
