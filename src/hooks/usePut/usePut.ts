import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function usePut<T>(url: string, options: FetchHookOptions<T> = {}): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const putRequest = useCallback(
    (fetchOptions?: FetchOptions) => request({ ...fetchOptions, method: 'PUT' }),
    [request]
  );

  return [putRequest, state];
}
