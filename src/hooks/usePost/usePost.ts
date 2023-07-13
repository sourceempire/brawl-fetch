import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function usePost<T, V>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, V> {
  const [request, state] = useFetch<T, V>(url, options);

  const postRequest = useCallback(
    (fetchOptions?: FetchOptions<V>) => request({ ...fetchOptions, method: 'POST' }),
    [request]
  );

  return [postRequest, state];
}
