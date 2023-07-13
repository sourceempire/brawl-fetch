export type FetchBody = Record<string, unknown>;
export type FetchParamValue = string | number | boolean;

export type FetchParams<T = Record<string, FetchParamValue>> = {
  [K in keyof T]: FetchParamValue;
};

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FetchOptions<U = FetchParams, V = FetchBody> = {
  method?: HTTPMethod;
  headers?: Headers;
  params?: U;
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
