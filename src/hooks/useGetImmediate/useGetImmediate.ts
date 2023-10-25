import {
  ErrorState,
  FetchHookOptions,
  FetchOptions,
  FetchParams,
  LoadingState,
  SuccessState
} from '../../types';
import { useFetch } from '../useFetch';

export type Options<T, U = FetchParams> = FetchHookOptions<T> & {
  fetchOptions: Omit<FetchOptions<U>, 'body' | 'method'>;
};

export function useGetImmediate<T, U = FetchParams>(url: string, options: Options<T, U>) {
  const [lazyFetchData, { state: rawState, actions }] = useFetch<T, U>(url, {
    ...options,
    immediate: true
  });

  const state = rawState as LoadingState | ErrorState | SuccessState<T>;

  return { state, actions: { ...actions, refetch: lazyFetchData } };
}
