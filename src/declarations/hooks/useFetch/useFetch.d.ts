import { FetchHookOptions, FetchHookReturnType } from './useFetch.types';
export declare function useFetch<T>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T>;
