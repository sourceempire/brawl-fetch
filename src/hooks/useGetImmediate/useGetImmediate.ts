import { FetchHookOptions } from 'hooks/useFetch';
import { FetchOptions } from '../../types';
import { useFetchImmediate } from '../useFetchImmediate';

export function useGetImmediate<T>(
  url: string,
  fetchOptions?: Omit<FetchOptions, 'body' | 'method'>,
  options?: FetchHookOptions<T>
) {
  return useFetchImmediate<T>(url, { ...fetchOptions, method: 'GET' }, options);
}
