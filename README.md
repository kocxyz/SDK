# KnockoutCity SDK

[![Version](https://img.shields.io/npm/v/knockoutcity-sdk.svg)](https://www.npmjs.com/package/knockoutcity-sdk)
[![License](https://img.shields.io/npm/l/knockoutcity-sdk.svg)](https://github.com/tandashi/KnockoutCity-SDK/blob/main/LICENSE)

A developer friendly **unofficial** SDK for the private server build of [KnockoutCity](https://www.knockoutcity.com/private-server-edition).

> **Note**  
> This project is currently in alpha and is undergoing heavy development.

## Features

- Authenticate with a private server (with some [limitations](#limitations))
- Listening to various Server Events (e.g. group joins, invites, ...)
- Sending various Commands to the Server (e.g. group invites, match making, ...)

## Limitations

- Authentication is currently only possible to private servers that don't use a secret or any type or authentication proxy (e.g. [KOCity-Proxy](https://github.com/Ipmake/KOCity-Proxy))
- Joining Gameserver is currently not possible but will hopefully become a feature when the `VNET0` Protocol has been reverse engineered.

## Installation

Use your prefered package manager to install `knockoutcity-sdk`.

```bash
# NPM
npm install knockoutcity-sdk

# Yarn
yarn knockoutcity-sdk

# PNPM
pnpm install knockoutcity-sdk
```

## Usage

```typescript
// Using required
const kocSDK = require('knockoutcity-sdk');

// Using import
import * as kocSDK from 'knockoutcity-sdk'
// or
import { ... } from 'knockoutcity-sdk'
```

Also make sure to check the [`examples`](examples) for detailed examples on the usage and possibilities of this sdk.

### Connecting to a Server

```typescript
import { authenticate, KOCWebsocketClient } from 'knockoutcity-sdk';

const BASE_URL = 'http://127.0.0.1:23600';

const kocWebsocketClient = new KOCWebsocketClient(BASE_URL);
const { token } = await authenticate(BASE_URL, 'USERNAME');

// ... register listeners

await kocWebsocketClient.connect(token);

// ... emit events
```

### Listening to Events

```typescript
kocWebsocketClient.on('EVENT NAME', (data) => {
  // ...
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GNU GPLv3](https://github.com/your-username/repo-name/blob/master/LICENSE)
