import { useCallback } from "react";
import { useFetch, FetchHookReturnType, FetchHookOptions } from "./useFetch";
import { FetchOptions } from "../types";

export function useGet<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const getRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions, "body">) => {
      return request({ ...fetchOptions, method: "GET" });
    },
    [request]
  );

  return [getRequest, state];
}
