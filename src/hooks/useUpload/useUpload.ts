import { useCallback } from 'react';
import { FetchOptions } from '../../types';
import { FetchHookOptions, type State } from '../useFetch';
import { usePost } from '../usePost/usePost';

type UploadHookReturnType<T = unknown> = [
  (blob: Blob, options?: FetchOptions) => AbortController,
  State<T>
];

export function useUpload<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): UploadHookReturnType<T> {
  const [request, state] = usePost<T>(url, options);

  const uploadRequest = useCallback(
    (blob: Blob, fetchOptions?: FetchOptions) => {
      const formData = new FormData();
      formData.append('blob', blob);

      if (fetchOptions?.body) {
        formData.append('body', JSON.stringify(fetchOptions.body));
      }

      // const headers = new Headers({
      //   'Content-Type': 'multipart/form-data'
      // });

      return request({ ...fetchOptions, body: formData });
    },
    [request]
  );

  return [uploadRequest, state];
}
