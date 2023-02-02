import { FetchHookOptions, FetchHookReturnType } from '../useFetch';
export declare function useGet<T>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T>;
