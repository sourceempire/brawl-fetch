import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function useDelete<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [request, state] = useFetch<T, undefined>(url, options);

  const deleteRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions, 'body'>) => request({ ...fetchOptions, method: 'DELETE' }),
    [request]
  );

  return [deleteRequest, state];
}
