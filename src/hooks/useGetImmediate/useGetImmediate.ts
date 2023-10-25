import { useFetch } from 'hooks/useFetch';
import { FetchHookOptions, FetchOptions, FetchParams } from '../../types';

export type Options<T, U = FetchParams> = FetchHookOptions<T> & {
  fetchOptions: Omit<FetchOptions<U>, 'body' | 'method'>;
};

export function useGetImmediate<T, U = FetchParams>(url: string, options: Options<T, U>) {
  const [lazyFetchData, { state, actions }] = useFetch<T, U>(url, {
    ...options,
    immediate: true
  });

  return { state, actions: { ...actions, refetch: lazyFetchData } };
}
