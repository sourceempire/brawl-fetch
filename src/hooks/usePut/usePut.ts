import { useCallback } from 'react';
import { FetchBody, FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function usePut<T, V = FetchBody, U = FetchParams>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U, V> {
  const [request, state] = useFetch<T, U, V>(url, options);

  const putRequest = useCallback(
    (fetchOptions?: FetchOptions<U, V>) => request({ ...fetchOptions, method: 'PUT' }),
    [request]
  );

  return [putRequest, state];
}
