import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { brawlFetch } from '../../brawlFetch';
import {
  Action,
  Actions,
  FetchBody,
  FetchHookOptions,
  FetchHookReturnType,
  FetchOptions,
  FetchParams,
  ServerError,
  State
} from '../../types';

const initialState: State<unknown> = {
  loading: false,
  success: false,
  error: null,
  data: null
};

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case Actions.FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case Actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        success: true
      };
    case Actions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      };
    case Actions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      throw new Error();
  }
}

function handleComplete<T>(
  response: T,
  options: FetchHookOptions<T>,
  dispatch: React.Dispatch<Action<T>>
) {
  const { onComplete } = options;
  dispatch({ type: Actions.FETCH_SUCCESS, payload: response });

  onComplete?.(response);
}

function handleError(
  error: ServerError,
  options: FetchHookOptions<never>,
  dispatch: React.Dispatch<Action<never>>
) {
  if (error?.name === 'AbortError') return;

  dispatch({ type: Actions.FETCH_FAILURE, payload: error });
  options?.onError?.(error);
}

export function useFetch<T, U = FetchParams, V = FetchBody>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U, V> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    fetchReducer,
    initialState as State<T>
  );

  const requestUrl = useRef(url);
  const optionsRef = useRef(options);

  // Update refs whenever url or options change
  useEffect(() => {
    requestUrl.current = url;
    optionsRef.current = options;
  }, [url, options]);

  const request = useCallback((fetchOptions: FetchOptions<U, V> = {}) => {
    const abortController = new AbortController();

    const options = {
      ...fetchOptions,
      signal: abortController.signal
    };

    dispatch({ type: Actions.FETCH_INIT });

    brawlFetch<T, U, V>(requestUrl.current, options)
      .then((res) => handleComplete(res, optionsRef.current, dispatch))
      .catch((err) => handleError(err, optionsRef.current, dispatch));

    return abortController;
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: Actions.CLEAR_ERROR });
  }, []);

  return [request, { ...state, clearError }];
}
