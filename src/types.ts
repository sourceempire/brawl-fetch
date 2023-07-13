export type FetchParams = Record<string, string | number | boolean>;
export type FetchBody = Record<string, unknown>;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FetchOptions<V = FetchBody> = {
  method?: HTTPMethod;
  headers?: Headers;
  params?: FetchParams;
  body?: V | FormData;
  signal?: AbortSignal;
};

export type ServerResponse<T> = {
  succeeded?: boolean;
} & T;

export type ServerError = {
  status: number;
  statusText: string;
  error: string;
} & Record<string, unknown>;
