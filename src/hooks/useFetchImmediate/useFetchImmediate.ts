import { useEffect, useRef } from 'react';
import { FetchBody, FetchHookOptions, FetchOptions, FetchParams } from '../../types';
import { useFetch } from '../useFetch';

export function useFetchImmediate<T, U = FetchParams, V = FetchBody>(
  url: string,
  fetchOptions: FetchOptions<U, V> = {},
  options: FetchHookOptions<T> = {}
) {
  const fetchOptionsRef = useRef(fetchOptions);

  const [lazyFetchData, state] = useFetch<T, U, V>(url, options);

  // Update fetchOptionsRef whenever fetchOptions changes
  useEffect(() => {
    fetchOptionsRef.current = fetchOptions;
  }, [fetchOptions]);

  useEffect(() => {
    const abortController = lazyFetchData(fetchOptionsRef.current);

    return () => {
      abortController.abort();
    };
  }, [lazyFetchData]);

  return { ...state };
}
