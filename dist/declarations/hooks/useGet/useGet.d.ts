import { FetchHookReturnType, FetchParams, LazyFetchHookOptions } from '../../types';
export declare function useGet<T, U = FetchParams>(url: string, options?: LazyFetchHookOptions<T>): FetchHookReturnType<T, U>;
