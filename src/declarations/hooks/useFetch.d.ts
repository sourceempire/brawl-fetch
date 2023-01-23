import { FetchOptions, ServerError } from '../types';
type Methods = {
    clearError: () => void;
    refetch: () => void;
};
export type State<T = any> = {
    loading: boolean;
    success: boolean;
    error: ServerError | null;
    data: T | null;
};
export type FetchHookReturnType<T = unknown> = [(options?: FetchOptions) => AbortController, State<T> & Methods];
type FetchHookOptions<T> = {
    onComplete?: (data: T) => void;
    onError?: (error: unknown) => void;
};
export declare function useFetch<T>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T>;
export {};
