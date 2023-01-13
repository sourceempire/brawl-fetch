import { useEffect } from 'react';
import { FetchOptions } from '../types';
import { useFetch } from './useFetch';

export function useFetchImmediate<T>(url: string, options: FetchOptions = {}) {
  const [lazyFetchData, state] = useFetch<T>(url);

  useEffect(() => {
    const abortController = lazyFetchData(options);

    return () => {
      abortController.abort();
    };
    // TODO -> How do we fill this dependency array?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { ...state };
}
