import { FetchOptions } from '../types';
export declare function useFetchImmediate<T>(url: string, options?: FetchOptions): {
    loading: boolean;
    success: boolean;
    error: import("../types").ServerError | null;
    data: T | null;
    clearError: () => void;
    refetch: () => void;
};
