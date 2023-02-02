import { useEffect, useRef } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, useFetch } from '../useFetch';

export function useFetchImmediate<T>(
  url: string,
  fetchOptions: FetchOptions = {},
  options: FetchHookOptions<T> = {}
) {
  const fetchOptionsRef = useRef(fetchOptions);

  const [lazyFetchData, state] = useFetch<T>(url, options);

  useEffect(() => {
    const abortController = lazyFetchData(fetchOptionsRef.current);

    return () => {
      abortController.abort();
    };
  }, [lazyFetchData]);

  return { ...state };
}
