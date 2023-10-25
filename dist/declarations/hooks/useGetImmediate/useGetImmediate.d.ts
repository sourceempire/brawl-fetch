import { FetchHookOptions, FetchOptions, FetchParams } from '../../types';
export type Options<T, U = FetchParams> = FetchHookOptions<T> & {
    fetchOptions: Omit<FetchOptions<U>, 'body' | 'method'>;
};
export declare function useGetImmediate<T, U = FetchParams>(url: string, options: Options<T, U>): {
    state: import("../../types").State<T>;
    actions: {
        refetch: (options?: FetchOptions<U, import("../../types").FetchBody> | undefined) => AbortController;
        resetState: () => void;
    };
};
