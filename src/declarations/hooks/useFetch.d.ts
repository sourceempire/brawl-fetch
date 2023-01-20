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
export declare function useFetch<T>(url: string): FetchHookReturnType<T>;
export {};
