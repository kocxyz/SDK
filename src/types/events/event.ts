import type {
  KOCUserPingDataClientEvent,
  KOCUserSetPresenceClientEvent,
  KOCRelayGroupInviteClientEvent,
  KOCBlocksGetServerEvent,
  KOCBrawlPassGetServerEvent,
  KOCCommerceCatalogUpdateServerEvent,
  KOCCommerceInventoryUpdateServerEvent,
  KOCContractProgressGetServerEvent,
  KOCCrewsGetServerEvent,
  KOCCrewInvitesGetServerEvent,
  KOCFriendRequestsGetServerEvent,
  KOCFriendsGetServerEvent,
  KOCNewsServerEvent,
  KOCRecentPlayersGetServerEvent,
  KOCStreetRankUpdateServerEvent,
  KOCSetUserQuitPenaltyServerEvent,
  KOCPersistenceGetUserPairsServerEvent,
  KOCWelcomeServerEvent,
} from ".";

export type KOCEvent = {
  type: `_${string}`;
}

export type KOCClientEvent =
  | KOCUserPingDataClientEvent
  | KOCUserSetPresenceClientEvent
  | KOCRelayGroupInviteClientEvent

export type KOCServerEvent =
  | KOCBlocksGetServerEvent
  | KOCBrawlPassGetServerEvent
  | KOCCommerceCatalogUpdateServerEvent
  | KOCCommerceInventoryUpdateServerEvent
  | KOCContractProgressGetServerEvent
  | KOCCrewsGetServerEvent
  | KOCCrewInvitesGetServerEvent
  | KOCFriendsGetServerEvent
  | KOCFriendRequestsGetServerEvent
  | KOCNewsServerEvent
  | KOCRecentPlayersGetServerEvent
  | KOCStreetRankUpdateServerEvent
  | KOCSetUserQuitPenaltyServerEvent
  | KOCPersistenceGetUserPairsServerEvent
  | KOCWelcomeServerEvent