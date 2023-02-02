import { FetchOptions } from '../../types';
import { FetchHookOptions } from '../useFetch';
export declare function useFetchImmediate<T>(url: string, fetchOptions?: FetchOptions, options?: FetchHookOptions<T>): {
    loading: boolean;
    success: boolean;
    error: import("../../types").ServerError | null;
    data: T | null;
    clearError: () => void;
};
