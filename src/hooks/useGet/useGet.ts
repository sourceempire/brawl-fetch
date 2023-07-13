import { useCallback } from 'react';
import { FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType, useFetch } from '../useFetch';

export function useGet<T, U = FetchParams>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T, U> {
  const [request, state] = useFetch<T, U>(url, options);

  const getRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions<U>, 'body'>) => {
      return request({ ...fetchOptions, method: 'GET' });
    },
    [request]
  );

  return [getRequest, state];
}
