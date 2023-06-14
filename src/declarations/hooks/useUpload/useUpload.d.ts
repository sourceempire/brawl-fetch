import { FetchOptions } from '../../types';
import { FetchHookOptions, type State } from '../useFetch';
type UploadHookReturnType<T = unknown> = [
    (blob: Blob, options?: FetchOptions) => AbortController,
    State<T>
];
export declare function useUpload<T>(url: string, options?: Omit<FetchHookOptions<T>, 'headers' | 'method'>): UploadHookReturnType<T>;
export {};
