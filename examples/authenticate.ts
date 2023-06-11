import * as kocSDK from '../src/index';

const BASE_URL = 'http://127.0.0.1:23600';

async function main() {
  const kocWebsocketClient = new kocSDK.KOCWebsocketClient(BASE_URL);
  const { token } = await kocSDK.authenticate(BASE_URL, 'USERNAME');

  // ... register listeners

  await kocWebsocketClient.connect(token);

  // ... emit events
}

main();
