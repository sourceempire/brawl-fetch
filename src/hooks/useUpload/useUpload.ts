import { useCallback } from 'react';
import { FetchBody, FetchOptions, FetchParams } from '../../types';
import { FetchHookOptions, State, useFetch } from '../useFetch';

type UploadHookReturnType<T = unknown, U = FetchParams, V = FetchBody> = [
  (blob: Blob, options?: FetchOptions<U, V>) => AbortController,
  State<T>
];

export function useUpload<T, U = FetchParams, V = FetchBody>(
  url: string,
  options: Omit<FetchHookOptions<T>, 'headers' | 'method'> = {}
): UploadHookReturnType<T, U, V> {
  const [request, state] = useFetch<T, U, V>(url, options);

  const uploadRequest = useCallback(
    (blob: Blob, fetchOptions?: FetchOptions<U, V>) => {
      const formData = new FormData();
      formData.append('blob', blob);

      if (fetchOptions?.body) {
        formData.append('body', JSON.stringify(fetchOptions.body));
      }

      return request({
        method: 'POST',
        signal: fetchOptions?.signal,
        params: fetchOptions?.params,
        body: formData
      });
    },
    [request]
  );

  return [uploadRequest, state];
}
