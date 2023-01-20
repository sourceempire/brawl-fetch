import React, { useCallback, useReducer } from 'react';
import { brawlFetch } from '../brawlFetch';
import { FetchOptions, ServerError } from '../types';

const initialState: State = {
  loading: true,
  success: false,
  error: null,
  data: null,
};

enum Actions {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CLEAR_ERROR,
}

type Methods = {
  clearError: () => void;
  refetch: () => void;
};

type Action<T> =
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

export type State<T = any> = {
  loading: boolean;
  success: boolean;
  error: ServerError | null;
  data: T | null;
};

export type FetchHookReturnType<T = unknown> = [(options?: FetchOptions) => AbortController, State<T> & Methods];

export function useFetch<T>(url: string): FetchHookReturnType<T> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(fetchReducer, initialState);

  const request = useCallback(
    (options: FetchOptions = {}) => {
      const abortController = new AbortController();
      fetchData<T>(url, { ...options, signal: abortController.signal }, dispatch);
      return abortController;
    },
    [url],
  );

  const clearError = useCallback(() => {
    dispatch({ type: Actions.CLEAR_ERROR });
  }, []);

  return [request, { ...state, clearError, refetch: request }];
}

async function fetchData<T>(url: string, options: FetchOptions = {}, dispatch: React.Dispatch<Action<T>>) {
  dispatch({ type: Actions.FETCH_INIT });

  try {
    const response = await brawlFetch<T>(url, { ...options });
    dispatch({ type: Actions.FETCH_SUCCESS, payload: response });
  } catch (e) {
    const error = e as ServerError;
    if (error.name === 'AbortError') return;
    dispatch({ type: Actions.FETCH_FAILURE, payload: error });
  }
}

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case Actions.FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case Actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        success: true,
      };
    case Actions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case Actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      throw new Error();
  }
}
