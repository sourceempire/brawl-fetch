import { FetchBody, FetchHookOptions, FetchOptions, FetchParams } from '../../types';
export declare function useFetchImmediate<T, U = FetchParams, V = FetchBody>(url: string, fetchOptions?: FetchOptions<U, V>, options?: FetchHookOptions<T>): {
    loading: boolean;
    success: boolean;
    error: import("../../types").ServerError | null;
    data: T | null;
    clearError: () => void;
};
