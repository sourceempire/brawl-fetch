import { FetchBody, FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType } from './useFetch.types';
export declare function useFetch<T, U = FetchParams, V = FetchBody>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U, V>;
