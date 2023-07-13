import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function usePut<T, V>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, V> {
  const [request, state] = useFetch<T, V>(url, options);

  const putRequest = useCallback(
    (fetchOptions?: FetchOptions<V>) => request({ ...fetchOptions, method: 'PUT' }),
    [request]
  );

  return [putRequest, state];
}
