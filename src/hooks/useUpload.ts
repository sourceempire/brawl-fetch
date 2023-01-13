import { type State } from './useFetch';
import { usePost } from './usePost';
import { FetchOptions } from '../types';

type UploadHookReturnType<T = unknown> = [(blob: Blob, options?: FetchOptions) => AbortController, State<T>];

export function useUpload<T>(url: string): UploadHookReturnType<T> {
  const [request, state] = usePost<T>(url);

  function uploadRequest(blob: Blob, options?: FetchOptions) {
    const formData = new FormData();
    formData.append('blob', blob);

    if (options?.body) {
      formData.append('body', JSON.stringify(options.body));
    }

    const headers = new Headers({
      'Content-Type': 'multipart/form-data',
    });

    return request({ ...options, headers });
  }

  return [uploadRequest, state];
}
