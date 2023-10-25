import { FetchBody, FetchHookReturnType, FetchParams, ImmediateFetchHookOptions, LazyFetchHookOptions } from '../../types';
export declare function useFetch<T, U = FetchParams, V = FetchBody>(url: string, options?: LazyFetchHookOptions<T> | ImmediateFetchHookOptions<T, U, V>): FetchHookReturnType<T, U, V>;
