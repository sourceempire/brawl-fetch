import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { brawlFetch } from '../../brawlFetch';
import {
  Action,
  Actions,
  ErrorResponse,
  FetchBody,
  FetchError,
  FetchHookOptions,
  FetchHookReturnType,
  FetchOptions,
  FetchParams,
  State,
  isAbortError,
  isErrorResponse
} from '../../types';

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case Actions.FETCH_INIT:
      return {
        loading: true,
        requestMade: true
      };
    case Actions.FETCH_SUCCESS:
      return {
        loading: false,
        requestMade: true,
        error: null,
        data: action.payload
      };
    case Actions.FETCH_FAILURE:
      return {
        loading: false,
        requestMade: true,
        error: action.payload
      };
    case Actions.CLEAR_ERROR:
      return {
        loading: false,
        requestMade: true,
        error: null,
        data: state.data as T
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
  error: FetchError,
  options: FetchHookOptions<never>,
  dispatch: React.Dispatch<Action<never>>
) {
  if (isAbortError(error)) return;

  if (isErrorResponse(error)) {
    dispatch({ type: Actions.FETCH_FAILURE, payload: error });
    options?.onError?.(error);
  } else {
    const uncaughtError: ErrorResponse = {
      errorCode: 'UNCAUGHT_ERROR',
      message: 'Uncaught error in useFetch'
    };

    dispatch({ type: Actions.FETCH_FAILURE, payload: uncaughtError });
    options?.onError?.(uncaughtError);

    console.warn('Unknown error:', error);
  }
}

export function useFetch<T, U = FetchParams, V = FetchBody>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U, V> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    fetchReducer,
    options?.immediate
      ? { loading: true, requestMade: true }
      : { loading: false, requestMade: false }
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

  useEffect(() => {
    if (optionsRef.current.immediate) {
      request();
    }
  }, [request]);

  const clearError = useCallback(() => {
    dispatch({ type: Actions.CLEAR_ERROR });
  }, []);

  return [request, { ...state, clearError }];
}
