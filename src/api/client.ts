import type { KOCAPIServerUrl } from '@/types';
import axios, { type AxiosResponse } from 'axios';

export class APIClient {
  /**
   * Contains the KOCServer address
   */
  private address: KOCAPIServerUrl;
  /**
   * Contains the JWT for the Backend API
   */
  private backendJWT: string | undefined;

  constructor(address: KOCAPIServerUrl, backendJWT?: string) {
    this.address = address;
    this.backendJWT = backendJWT;
  }

  public async post<Response, Data extends Record<string, unknown> = Record<string, unknown>>(
    url: string,
    data: Data,
  ): Promise<AxiosResponse<Response>> {
    return axios.post<Response>(`${this.address}${url}`, data, {
      headers: {
        Authorization: `Bearer ${this.backendJWT}`,
      },
    });
  }
}
