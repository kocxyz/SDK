export type IPAddress = `${number}.${number}.${number}.${number}`;
export type KOCServerUrl = `${IPAddress}:${number}` | `${string}:${number}`;
export type KOCAPIServerUrl = `http://${KOCServerUrl}` | `https://${KOCServerUrl}`;
