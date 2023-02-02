import { FetchHookOptions } from 'hooks/useFetch';
import { FetchOptions } from '../../types';
export declare function useGetImmediate<T>(url: string, fetchOptions?: Omit<FetchOptions, 'body' | 'method'>, options?: FetchHookOptions<T>): {
    loading: boolean;
    success: boolean;
    error: import("../../types").ServerError | null;
    data: T | null;
    clearError: () => void;
};
