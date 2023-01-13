import { useCallback } from 'react';
import { useFetch, FetchHookReturnType } from './useFetch';
import { FetchOptions } from '../types';

export function useGet<T>(url: string): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url);

  const getRequest = useCallback(
    (options?: Omit<FetchOptions, 'body'>) => {
      return request({ ...options, method: 'GET' });
    },
    [request],
  );

  return [getRequest, state];
}
