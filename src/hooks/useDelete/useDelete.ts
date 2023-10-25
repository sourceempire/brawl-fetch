import { useCallback } from 'react';
import { FetchHookReturnType, FetchOptions, FetchParams, LazyFetchHookOptions } from '../../types';
import { useFetch } from '../useFetch';

export function useDelete<T, U = FetchParams>(
  url: string,
  options: LazyFetchHookOptions<T> = {}
): FetchHookReturnType<T, U> {
  const [request, state] = useFetch<T, U>(url, options);

  const deleteRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions<U>, 'body'>) =>
      request({ ...fetchOptions, method: 'DELETE' }),
    [request]
  );

  return [deleteRequest, state];
}
