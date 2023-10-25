import { ActionMethods, FetchBody, FetchOptions, FetchParams, LazyFetchHookOptions, State } from '../../types';
type UploadHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
    (blob: Blob, options?: FetchOptions<U, V>) => AbortController,
    {
        state: State<T>;
        actions: ActionMethods;
    }
];
export declare function useUpload<T, U = FetchParams, V = FetchBody>(url: string, options?: Omit<LazyFetchHookOptions<T>, 'headers' | 'method'>): UploadHookReturnType<T, U, V>;
export {};
