import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function useGet<T>(url: string, options: FetchHookOptions<T> = {}): FetchHookReturnType<T> {
  const [request, state] = useFetch<T, undefined>(url, options);

  const getRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions, 'body'>) => {
      return request({ ...fetchOptions, method: 'GET' });
    },
    [request]
  );

  return [getRequest, state];
}
