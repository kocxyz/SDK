import type * as KOCEvents from '@/types/events';

export type KOCEvent = {
  type: `_${string}`;
};

export type KOCClientEvent =
  // Block
  | KOCEvents.KOCBlockPlayerClientEvent
  | KOCEvents.KOCUnblockPlayerClientEvent
  // Commerce
  | KOCEvents.KOCCommerceCrewInventoryEquipClientEvent
  | KOCEvents.KOCCommerceGetInventoryClientEvent
  | KOCEvents.KOCCommerceGetCrewInventoryClientEvent
  | KOCEvents.KOCCommerceGetEquipmentUsersClientEvent
  | KOCEvents.KOCCommerceInventoryEquipClientEvent
  | KOCEvents.KOCCommerceRedeemCodeClientEvent
  | KOCEvents.KOCCommercePurchaseClientEvent
  // Crew
  | KOCEvents.KOCCrewRequestInfoClientEvent
  | KOCEvents.KOCCrewsAcceptInviteClientEvent
  | KOCEvents.KOCCrewsAcceptJoinRequestClientEvent
  | KOCEvents.KOCCrewsChangeNameClientEvent
  | KOCEvents.KOCCrewsCreateClientEvent
  | KOCEvents.KOCCrewsKickUserClientEvent
  | KOCEvents.KOCCrewsLeaveClientEvent
  | KOCEvents.KOCCrewsPromoteCaptainClientEvent
  | KOCEvents.KOCCrewsRejectInviteClientEvent
  | KOCEvents.KOCCrewsRejectJoinRequestClientEvent
  | KOCEvents.KOCCrewsReportNameClientEvent
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
  | KOCEvents.KOCMatchmakingCancelGameSearchClientEvent
  | KOCEvents.KOCMatchmakingStartGameSearchClientEvent
  // Relay
  | KOCEvents.KOCRelayClientEvent
  // Reporting
  | KOCEvents.KOCReportServerClientEvent
  // User
  | KOCEvents.KOCPersistenceSetUserPairsClientEvent
  | KOCEvents.KOCPersistenceSetUserSettingsClientEvent
  | KOCEvents.KOCUserAddRecentPlayersClientEvent
  | KOCEvents.KOCUserPingDataClientEvent
  | KOCEvents.KOCUserReportAbuseClientEvent
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
  | KOCEvents.KOCCommerceInventoryUpdateArbitraryUsersServerEvent
  | KOCEvents.KOCCommerceInventoryUpdateUsersServerEvent
  | KOCEvents.KOCCommerceRedeemCodeResponseServerEvent
  | KOCEvents.KOCCommercePurchaseResultServerEvent
  // Contract
  | KOCEvents.KOCContractProgressGetServerEvent
  // Crew
  | KOCEvents.KOCCrewsContractsGetServerEvent
  | KOCEvents.KOCCrewsGetServerEvent
  | KOCEvents.KOCCrewJoinRequestsGetServerEvent
  | KOCEvents.KOCCrewsSearchResultServerEvent
  | KOCEvents.KOCCrewInvitesGetServerEvent
  // Friends
  | KOCEvents.KOCFriendsGetServerEvent
  | KOCEvents.KOCFriendRequestsGetServerEvent
  // Game Server
  | KOCEvents.KOCAssignTeamsServerEvent
  | KOCEvents.KOCServerCrewUpdateServerEvent
  | KOCEvents.KOCGameServerConfigureServerEvent
  // Groups
  | KOCEvents.KOCGroupGetServerEvent
  | KOCEvents.KOCGroupKickedServerEvent
  | KOCEvents.KOCGroupLeftServerEvent
  // Matchmaking
  | KOCEvents.KOCMatchmakingAdvertiseServerServerEvent
  | KOCEvents.KOCMatchmakingCanceledServerEvent
  | KOCEvents.KOCMatchmakingStartedSearchServerEvent
  | KOCEvents.KOCMatchmakingStatusReportServerEvent
  | KOCEvents.KOCSkillUpdateServerEvent
  | KOCEvents.KOCSkillUpdateReceivedServerEvent
  // News
  | KOCEvents.KOCNewsServerEvent
  // Penalty
  | KOCEvents.KOCSetGroupQuitPenaltyServerEvent
  | KOCEvents.KOCSetPenaltyDurationIfQuitServerEvent
  | KOCEvents.KOCSetUserQuitPenaltyServerEvent
  // Ping
  | KOCEvents.KOCPingDisplayValuesServerEvent
  // Players
  | KOCEvents.KOCRecentPlayersGetServerEvent
  // Playlists
  | KOCEvents.KOCPlaylistsGetServerEvent
  // Replay
  | KOCEvents.KOCRelayServerEvent
  // Reporting
  | KOCEvents.KOCReportSubmissionResultServerEvent
  // Street Rank
  | KOCEvents.KOCStreetRankUpdateServerEvent
  // User
  | KOCEvents.KOCPersistenceGetUserPairsServerEvent
  | KOCEvents.KOCPresenceLookupGetServerEvent
  // Error
  | KOCEvents.KOCErrorServerEvent
  // Welcome
  | KOCEvents.KOCWelcomeServerEvent;

export type KOCGameServerEvent =
  // Commerce
  | KOCEvents.KOCCommerceSetConsumablesGameServerEvent
  // Contact
  | KOCEvents.KOCContractsUpdateProgressGameServerEvent
  // Crew
  | KOCEvents.KOCCrewsRequestContractUpdateGameServerEvent
  // GameServer
  | KOCEvents.KOCGameServerRequestedNewPlayerGameServerEvent
  | KOCEvents.KOCGameServerCancelledNewPlayerRequestGameServerEvent
  | KOCEvents.KOCGameServerRegisterGameServerEvent
  | KOCEvents.KOCServerTimeDeltaGameServerEvent
  | KOCEvents.KOCTeammateDisconnectedGameServerEvent
  // Matchmaking
  | KOCEvents.KOCMatchmakingUpdateGameLoadoutGameServerEvent
  | KOCEvents.KOCMatchmakingUserUpdateSkillGameServerEvent
  // Street Rank
  | KOCEvents.KOCStreetRankUpdateGameServerEvent
  // User
  | KOCEvents.KOCGiveUserQuittersMarksGameServerEvent
  | KOCEvents.KOCPersistenceSetUserPairsGameServerEvent
  | KOCEvents.KOCUserConnectTokenStatsGameServerEvent;
