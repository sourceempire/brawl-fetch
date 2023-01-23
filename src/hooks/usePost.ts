import { useFetch, FetchHookReturnType, FetchHookOptions } from "./useFetch";
import { FetchOptions } from "../types";
import { useCallback } from "react";

export function usePost<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const postRequest = useCallback(
    (fetchOptions?: FetchOptions) =>
      request({ ...fetchOptions, method: "POST" }),
    [request]
  );

  return [postRequest, state];
}
