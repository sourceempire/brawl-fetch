import { FetchBody, FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions, State } from '../useFetch';
type UploadHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
    (blob: Blob, options?: FetchOptions<U, V>) => AbortController,
    State<T>
];
export declare function useUpload<T, U = FetchParams, V = FetchBody>(url: string, options?: Omit<FetchHookOptions<T>, 'headers' | 'method'>): UploadHookReturnType<T, U, V>;
export {};
