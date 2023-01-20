import { type State } from './useFetch';
import { FetchOptions } from '../types';
type UploadHookReturnType<T = unknown> = [(blob: Blob, options?: FetchOptions) => AbortController, State<T>];
export declare function useUpload<T>(url: string): UploadHookReturnType<T>;
export {};
