import { FetchBody, FetchHookOptions, FetchOptions, FetchParams } from '../../types';
export declare function useGetImmediate<T, U = FetchParams>(url: string, fetchOptions?: Omit<FetchOptions<U, FetchBody>, 'body' | 'method'>, options?: FetchHookOptions<T>): {
    loading: boolean;
    success: boolean;
    error: import("../../types").ServerError | null;
    data: T | null;
    clearError: () => void;
};
