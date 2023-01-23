import { useFetch, FetchHookReturnType, FetchHookOptions } from "./useFetch";
import { FetchOptions } from "../types";
import { useCallback } from "react";

export function usePut<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const putRequest = useCallback(
    (fetchOptions?: FetchOptions) =>
      request({ ...fetchOptions, method: "PUT" }),
    [request]
  );

  return [putRequest, state];
}
