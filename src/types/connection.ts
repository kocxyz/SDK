export type IPAddress = `${number}.${number}.${number}.${number}`;
export type IPAddressWithPort = `${IPAddress}:${number}`;
export type KOCServerUrl = IPAddressWithPort | `${string}:${number}`;
export type KOCAPIServerUrl = `http://${KOCServerUrl}` | `https://${KOCServerUrl}`;
export type KOCWebsocketServerUrl = `ws://${KOCServerUrl}`;
