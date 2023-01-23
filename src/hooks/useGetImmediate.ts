import { useFetchImmediate } from "./useFetchImmediate";
import { FetchOptions } from "../types";

export function useGetImmediate<T>(
  url: string,
  fetchOptions?: Omit<FetchOptions, "body" | "method">
) {
  return useFetchImmediate<T>(url, { ...fetchOptions, method: "GET" });
}
