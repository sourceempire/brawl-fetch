import { useEffect } from "react";
import { FetchOptions } from "../types";
import { useFetch } from "./useFetch";

export function useFetchImmediate<T>(
  url: string,
  fetchOptions: FetchOptions = {}
) {
  const [lazyFetchData, state] = useFetch<T>(url);

  useEffect(() => {
    const abortController = lazyFetchData(fetchOptions);

    return () => {
      abortController.abort();
    };
  }, [lazyFetchData]);

  return { ...state };
}
