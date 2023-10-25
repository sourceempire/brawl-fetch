import { FetchHookReturnType, FetchParams, LazyFetchHookOptions } from '../../types';
export declare function useDelete<T, U = FetchParams>(url: string, options?: LazyFetchHookOptions<T>): FetchHookReturnType<T, U>;
