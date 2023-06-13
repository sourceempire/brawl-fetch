import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, type State, useFetch } from '../useFetch';

type UploadHookReturnType<T = unknown> = [
  (blob: Blob, options?: FetchOptions) => AbortController,
  State<T>
];

export function useUpload<T>(
  url: string,
  options: Omit<FetchHookOptions<T>, 'headers'> = {}
): UploadHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const uploadRequest = useCallback(
    (blob: Blob, fetchOptions?: FetchOptions) => {
      const formData = new FormData();
      formData.append('blob', blob);

      if (fetchOptions?.body) {
        formData.append('body', JSON.stringify(fetchOptions.body));
      }

      formData.forEach((a) => console.log(a.toString()));

      global.console.log(
        JSON.stringify(
          {
            method: 'POST',
            signal: fetchOptions?.signal,
            params: fetchOptions?.params,
            body: formData
          },
          null,
          2
        )
      );

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
