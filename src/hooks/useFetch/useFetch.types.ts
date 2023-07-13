import { FetchBody, FetchOptions, ServerError } from 'types';

export type FetchHookOptions<T> = {
  onComplete?: (data: T) => void;
  onError?: (error: ServerError) => void;
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
      payload: ServerError;
    }
  | {
      type: Actions.CLEAR_ERROR;
    };

export type State<T> = {
  loading: boolean;
  success: boolean;
  error: ServerError | null;
  data: T | null;
};

export type FetchHookReturnType<T = unknown, V = FetchBody> = [
  (options?: FetchOptions<V>) => AbortController,
  State<T> & Methods
];
