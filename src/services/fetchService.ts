import { getEnv } from 'utils/envUtils';

class FetchService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = getEnv('API_BASE_URL');
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
      });
      const data: T = await response.json();
      // console.error(`endpoint =${endpoint} response =${JSON.stringify(data)}`);
      if (!response.ok) {
        // noinspection ExceptionCaughtLocallyJS
        // throw new Error((data as { message: string })?.message || 'Something went wrong');
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  public get<T>(endpoint: string, headers: HeadersInit = {}): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', headers });
  }

  public post<T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
  }

  public delete<T>(endpoint: string, body?: any, headers: HeadersInit = {}): Promise<T> {
    const options: RequestInit = {
      method: 'DELETE',
      headers,
    };
    if (body) options.body = JSON.stringify(body);
    return this.request<T>(endpoint, options);
  }

  public put<T>(endpoint: string, body: any, headers: HeadersInit = {}): Promise<T> {
    try {
      return this.request<T>(endpoint, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
      });
    } catch (error: any) {
      return error;
    }
  }
}

export const fetchService = new FetchService();
