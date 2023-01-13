import { useFetch, FetchHookReturnType } from './useFetch';
import { FetchOptions } from '../types';

export function useDelete<T>(url: string): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url);

  function deleteRequest(options?: Omit<FetchOptions, 'body'>) {
    return request({ ...options, method: 'DELETE' });
  }

  return [deleteRequest, state];
}
