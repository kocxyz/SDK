import type { KOCPersonaId, KOCUserId } from '@/types';
import { APIClient } from '@/api/client';

type User = {
  id: KOCUserId;
  auth_provider: 'dev';
  username: string;
  publisher_username: string;
  publisher_username_code: number;
  publisher_id: { invalid: 0 | 1 };
  persona_id: KOCPersonaId;
};

type AuthenticateResponse = {
  user: User;
  token: string;
  country: 'US';
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
export const authenticate = (client: APIClient, username: string): Promise<AuthenticateResponse> => {
  const systemGuid = crypto.randomUUID();
  const bootSessionGuid = crypto.randomUUID();

  return client
    .post<AuthenticateResponse>('/api/auth', {
      credentials: {
        username: username,
        platform: 'win64',
        pid: 0,
        system_guid: systemGuid,
        version: 269701,
        build: 'final',
        boot_session_guid: bootSessionGuid,
        is_using_epic_launcher: false,
      },
      auth_provider: 'dev',
    })
    .then((response) => response.data);
};
