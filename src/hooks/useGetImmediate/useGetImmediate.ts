import { FetchHookOptions } from 'hooks/useFetch';
import { FetchBody, FetchOptions, FetchParams } from '../../types';
import { useFetchImmediate } from '../useFetchImmediate';

export function useGetImmediate<T, U = FetchParams>(
  url: string,
  fetchOptions?: Omit<FetchOptions<U, FetchBody>, 'body' | 'method'>,
  options?: FetchHookOptions<T>
) {
  return useFetchImmediate<T, U>(url, { ...fetchOptions, method: 'GET' }, options);
}
