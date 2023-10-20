import { FetchHookOptions, FetchHookReturnType, FetchParams } from '../../types';
export declare function useGet<T, U = FetchParams>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U>;
