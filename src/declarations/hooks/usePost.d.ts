import { FetchHookReturnType, FetchHookOptions } from "./useFetch";
export declare function usePost<T>(url: string, options?: FetchHookOptions<T>): FetchHookReturnType<T>;
