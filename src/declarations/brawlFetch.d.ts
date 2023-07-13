import { FetchBody, FetchOptions, FetchParams } from './types';
export declare function brawlFetch<TResponseData, U = FetchParams, V = FetchBody>(url: string, options?: FetchOptions<U, V>): Promise<TResponseData>;
