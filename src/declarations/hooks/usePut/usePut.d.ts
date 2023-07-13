import { FetchBody, FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType } from '../useFetch';
export declare function usePut<T, V = FetchBody, U = FetchParams>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U, V>;
