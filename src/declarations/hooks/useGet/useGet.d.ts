import { FetchParams } from '../../types';
import { FetchHookOptions, FetchHookReturnType } from '../useFetch';
export declare function useGet<T, U = FetchParams>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T, U>;
