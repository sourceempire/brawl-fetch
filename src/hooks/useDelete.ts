import { useFetch, FetchHookReturnType, FetchHookOptions } from "./useFetch";
import { FetchOptions } from "../types";
import { useCallback } from "react";

export function useDelete<T>(
  url: string,
  options: FetchHookOptions<T> = {}
): FetchHookReturnType<T> {
  const [request, state] = useFetch<T>(url, options);

  const deleteRequest = useCallback(
    (fetchOptions?: Omit<FetchOptions, "body">) =>
      request({ ...fetchOptions, method: "DELETE" }),
    [request]
  );

  return [deleteRequest, state];
}
