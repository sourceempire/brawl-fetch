import { FetchBody, FetchHookReturnType, FetchParams, LazyFetchHookOptions } from '../../types';
export declare function usePost<T, V = FetchBody, U = FetchParams>(url: string, options?: LazyFetchHookOptions<T>): FetchHookReturnType<T, U, V>;
