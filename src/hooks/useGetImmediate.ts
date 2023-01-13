import { useFetchImmediate } from './useFetchImmediate';
import { FetchOptions } from '../types';

export function useGetImmediate<T>(url: string, options?: Omit<FetchOptions, 'body' | 'method'>) {
  return useFetchImmediate<T>(url, { ...options, method: 'GET' });
}
