import { FetchOptions } from '../types';
export declare function useGetImmediate<T>(url: string, options?: Omit<FetchOptions, 'body' | 'method'>): {
    loading: boolean;
    success: boolean;
    error: import("../types").ServerError | null;
    data: T | null;
    clearError: () => void;
    refetch: () => void;
};
