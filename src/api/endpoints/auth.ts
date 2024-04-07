import * as crypto from 'node:crypto';
import type { KOCPersonaId, KOCUserId, UUID5Seg } from '@/types';
import { APIClient } from '@/api/client';
import { fast1a64 } from 'fnv-plus';

export const generateSecret = (secret: string): number => parseInt(fast1a64(secret) as unknown as string, 16);

export type User = {
  id: KOCUserId;
  auth_provider: 'dev';
  username: string;
  publisher_username: string;
  publisher_username_code: number;
  publisher_id: { invalid: 0 | 1 };
  persona_id: KOCPersonaId;
};

export type AuthenticateResponse = {
  user: User;
  token: string;
  country: 'US';
};

export type AuthenticationRequest = {
  credentials: {
    username: string;
    secret?: number;
    platform: string;
    pid: number;
    system_guid: UUID5Seg;
    version: number;
    build: string;
    boot_session_guid: UUID5Seg;
    is_using_epic_launcher: boolean;
  };
  auth_provider: string;
};

/**
 * Authenticate against the Server.
 *
 * **Note**: Currently its not possible to authenticate against servers
 * that required a secret.
 *
 * @param client The API Client
 * @param username The username to authenticate with
 *
 * @returns
 */
export const authenticate = (client: APIClient, username: string, secret?: string): Promise<AuthenticateResponse> => {
  const systemGuid = crypto.randomUUID();
  const bootSessionGuid = crypto.randomUUID();

  return client
    .post<AuthenticateResponse>('/api/auth', {
      credentials: {
        username: username,
        secret: secret !== undefined ? generateSecret(secret) : undefined,
        platform: 'win64',
        pid: 0,
        system_guid: systemGuid,
        version: 269701,
        build: 'final',
        boot_session_guid: bootSessionGuid,
        is_using_epic_launcher: false,
      },
      auth_provider: 'dev',
    } satisfies AuthenticationRequest)
    .then((response) => response.data);
};
