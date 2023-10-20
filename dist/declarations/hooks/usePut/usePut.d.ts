import { FetchBody, FetchHookOptions, FetchHookReturnType, FetchParams } from '../../types';
export declare function usePut<T, V = FetchBody, U = FetchParams>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U, V>;
