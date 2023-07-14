import { useCallback } from 'react';
import {
  FetchBody,
  FetchHookOptions,
  FetchHookReturnType,
  FetchOptions,
  FetchParams
} from '../../types';
import { useFetch } from '../useFetch';

export function usePost<T, V = FetchBody, U = FetchParams>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U, V> {
  const [request, state] = useFetch<T, U, V>(url, options);

  const postRequest = useCallback(
    (fetchOptions?: FetchOptions<U, V>) => request({ ...fetchOptions, method: 'POST' }),
    [request]
  );

  return [postRequest, state];
}
