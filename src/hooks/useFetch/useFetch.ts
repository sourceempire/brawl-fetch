import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { brawlFetch } from '../../brawlFetch';
import {
  Action,
  Actions,
  ErrorResponse,
  ErrorState,
  FetchBody,
  FetchError,
  FetchHookOptions,
  FetchHookReturnType,
  FetchOptions,
  FetchParams,
  ImmediateFetchHookOptions,
  InitialState,
  LazyFetchHookOptions,
  LoadingState,
  State,
  SuccessState,
  isAbortError,
  isErrorResponse
} from '../../types';

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case Actions.FETCH_INIT: {
      const state: LoadingState = {
        status: 'loading'
      };

      return state;
    }
    case Actions.FETCH_SUCCESS: {
      const state: SuccessState<T> = {
        status: 'success',
        data: action.payload
      };

      return state;
    }
    case Actions.FETCH_FAILURE: {
      const state: ErrorState = {
        status: 'error',
        error: action.payload
      };

      return state;
    }
    case Actions.RESET_STATE: {
      const state: InitialState = {
        status: 'initial'
      };

      return state;
    }
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
  }
}

export function useFetch<T, U = FetchParams, V = FetchBody>(
  url: string,
  options: LazyFetchHookOptions<T> | ImmediateFetchHookOptions<T, U, V> = {}
): FetchHookReturnType<T, U, V> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    fetchReducer,
    options?.immediate ? { status: 'loading' } : { status: 'initial' }
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

  const resetState = useCallback(() => {
    dispatch({ type: Actions.RESET_STATE });
  }, []);

  return [request, { state, actions: { resetState } }];
}
