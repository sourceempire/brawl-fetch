import { FetchBody, FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions } from '../useFetch';
export declare function useFetchImmediate<T, U = FetchParams, V = FetchBody>(url: string, fetchOptions?: FetchOptions<U, V>, options?: FetchHookOptions<T>): {
    loading: boolean;
    success: boolean;
    error: import("../../types").ServerError | null;
    data: T | null;
    clearError: () => void;
};
