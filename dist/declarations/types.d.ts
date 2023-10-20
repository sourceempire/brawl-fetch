export type FetchBody = Record<string, unknown>;
export type FetchParamValue = string | number | boolean;
export type FetchParams<T = Record<string, FetchParamValue>> = {
    [K in keyof T]: FetchParamValue;
};
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type FetchOptions<U = FetchParams, V = FetchBody> = {
    method?: HTTPMethod;
    headers?: Headers;
    params?: U;
    body?: V | FormData;
    signal?: AbortSignal;
};
export type FetchHookOptions<T> = {
    onComplete?: (data: T) => void;
    onError?: (error: ErrorResponse) => void;
};
export declare enum Actions {
    FETCH_INIT = 0,
    FETCH_SUCCESS = 1,
    FETCH_FAILURE = 2,
    CLEAR_ERROR = 3
}
export type Methods = {
    clearError: () => void;
};
export type Action<T> = {
    type: Actions.FETCH_INIT;
} | {
    type: Actions.FETCH_SUCCESS;
    payload: T;
} | {
    type: Actions.FETCH_FAILURE;
    payload: ErrorResponse;
} | {
    type: Actions.CLEAR_ERROR;
};
export type State<T> = {
    loading: boolean;
    success: boolean;
    error: ErrorResponse | null;
    data: T | null;
};
export type FetchHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
    (options?: FetchOptions<U, V>) => AbortController,
    State<T> & Methods
];
export type ErrorResponse = {
    errorCode: string;
    message: string;
};
export type AbortError = {
    name: 'AbortError';
};
export type FetchError = ErrorResponse | AbortError | unknown;
export declare function isErrorResponse(error: unknown): error is ErrorResponse;
export declare function isAbortError(error: unknown): error is AbortError;
