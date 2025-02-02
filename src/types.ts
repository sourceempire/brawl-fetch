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

export type LazyFetchHookOptions<T> = FetchHookOptions<T> & {
  immediate?: false;
};

export type ImmediateFetchHookOptions<T, U = FetchParams, V = FetchBody> = FetchHookOptions<T> & {
  immediate: true;
  fetchOptions: FetchOptions<U, V>;
};

export enum Actions {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  RESET_STATE
}

export type ActionMethods = {
  resetState: () => void;
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
      type: Actions.RESET_STATE;
    };

export type InitialState = { status: 'initial' };
export type LoadingState = { status: 'loading' };
export type ErrorState = { status: 'error'; error: ErrorResponse };
export type SuccessState<T> = { status: 'success'; data: T };

export type State<T> = InitialState | LoadingState | ErrorState | SuccessState<T>;

export type FetchHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
  (options?: FetchOptions<U, V>) => AbortController,
  { state: State<T>; actions: ActionMethods }
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
