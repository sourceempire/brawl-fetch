import { useFetch, FetchHookReturnType } from './useFetch';
import { FetchOptions } from '../types';

export function usePost<T>(url: string): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url);

  function postRequest(options?: FetchOptions) {
    return request({ ...options, method: 'POST' });
  }

  return [postRequest, state];
}
