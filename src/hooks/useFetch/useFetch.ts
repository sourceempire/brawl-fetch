import React, { useCallback, useReducer, useRef } from 'react';
import { brawlFetch } from '../../brawlFetch';
import { FetchOptions, ServerError } from '../../types';
import { Action, Actions, FetchHookOptions, FetchHookReturnType, State } from './useFetch.types';

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

  const { onError } = options;

  onError?.(error);
}

export function useFetch<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    fetchReducer,
    initialState as State<T>
  );

  const requestUrl = useRef(url);
  const optionsRef = useRef(options);

  const request = useCallback((fetchOptions: FetchOptions = {}) => {
    const abortController = new AbortController();

    const options = {
      ...fetchOptions,
      signal: abortController.signal
    };

    dispatch({ type: Actions.FETCH_INIT });

    brawlFetch<T>(requestUrl.current, options)
      .then((res) => handleComplete(res, optionsRef.current, dispatch))
      .catch((err) => handleError(err, optionsRef.current, dispatch));

    return abortController;
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: Actions.CLEAR_ERROR });
  }, []);

  return [request, { ...state, clearError }];
}
