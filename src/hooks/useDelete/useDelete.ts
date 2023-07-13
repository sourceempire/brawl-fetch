import { useCallback } from 'react';
import { FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function useDelete<T, U = FetchParams>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U> {
  const [request, state] = useFetch<T, U>(url, options);

  const deleteRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions<U>, 'body'>) =>
      request({ ...fetchOptions, method: 'DELETE' }),
    [request]
  );

  return [deleteRequest, state];
}
