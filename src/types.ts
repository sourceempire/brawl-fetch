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

export type FetchHookOptions<T> = {
  onComplete?: (data: T) => void;
  onError?: (error: ErrorResponse) => void;
  immediate?: boolean;
};

export enum Actions {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CLEAR_ERROR
}

export type Methods = {
  clearError: () => void;
};

export type Action<T> =
  | {
      type: Actions.FETCH_INIT;
    }
  | {
      type: Actions.FETCH_SUCCESS;
      payload: T;
    }
  | {
      type: Actions.FETCH_FAILURE;
      payload: ErrorResponse;
    }
  | {
      type: Actions.CLEAR_ERROR;
    };

type InitialStateLoadingFalse = { loading: false; requestMade: false; data?: never; error?: never };
type InitialStateLoadingTrue = { loading: true; requestMade: true; data?: never; error?: never };
type LoadingState = { loading: true; requestMade: true; error?: never; data?: never };
type ErrorState = { loading: false; requestMade: true; error: ErrorResponse; data?: never };
export type SuccessState<T> = { loading: false; requestMade: true; error: null; data: T };

export type State<T> =
  | InitialStateLoadingFalse
  | InitialStateLoadingTrue
  | LoadingState
  | ErrorState
  | SuccessState<T>;

export type FetchHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
  (options?: FetchOptions<U, V>) => AbortController,
  State<T> & Methods
];

export type ErrorResponse = {
  errorCode: string;
  message: string;
};

export type AbortError = {
  name: 'AbortError';
};

export type FetchError = ErrorResponse | AbortError | unknown;

export function isErrorResponse(error: unknown): error is ErrorResponse {
  return (
    (error as ErrorResponse).errorCode !== undefined &&
    (error as ErrorResponse).message !== undefined
  );
}

export function isAbortError(error: unknown): error is AbortError {
  return (error as AbortError).name === 'AbortError';
}
