import { useFetch, FetchHookReturnType } from './useFetch';
import { FetchOptions } from '../types';

export function usePut<T>(url: string): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url);

  function putRequest(options?: FetchOptions) {
    return request({ ...options, method: 'PUT' });
  }

  return [putRequest, state];
}
