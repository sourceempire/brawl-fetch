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
export type ServerResponse<T> = {
    succeeded?: boolean;
} & T;
export type ServerError = {
    status: number;
    statusText: string;
    error: string;
} & Record<string, unknown>;
export type FetchHookOptions<T> = {
    onComplete?: (data: T) => void;
    onError?: (error: ServerError) => void;
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
    payload: ServerError;
} | {
    type: Actions.CLEAR_ERROR;
};
export type State<T> = {
    loading: boolean;
    success: boolean;
    error: ServerError | null;
    data: T | null;
};
export type FetchHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
    (options?: FetchOptions<U, V>) => AbortController,
    State<T> & Methods
];
