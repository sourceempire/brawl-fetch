import { FetchBody, FetchHookOptions, FetchHookReturnType, FetchParams } from '../../types';
export declare function useFetch<T, U = FetchParams, V = FetchBody>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U, V>;
