import axios from 'axios';
import type { KOCServerUrl } from '../types/connection';
import { KOCPersonaId, KOCUserId } from '../types/user';

type User = {
  id: KOCUserId;
  auth_provider: 'dev';
  username: String;
  publisher_username: String;
  publisher_username_code: Number;
  publisher_id: { invalid: 0 | 1 };
  persona_id: KOCPersonaId;
};

type AuthenticateResponse = {
  user: User;
  token: String;
  country: 'US';
};

/**
 * Authenticate against the Server.
 *
 * **Note**: Currently its not possible to authenticate against servers
 * that required a secret.
 *
 * @param address The address at which the server is reachable
 * @param username The username to authenticate with
 *
 * @returns
 */
export async function authenticate(address: KOCServerUrl, username: String): Promise<AuthenticateResponse> {
  const systemGuid = crypto.randomUUID();
  const bootSessionGuid = crypto.randomUUID();

  return axios
    .post<AuthenticateResponse>(`${address}/api/auth`, {
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
}
