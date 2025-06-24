import type { SWRConfiguration } from "swr";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export function useHTTP<T>(
  url: string,
  defaultValue: T,
  shouldFetch: boolean = true,
  config?: SWRConfiguration
) {
  const { data, error, isLoading, mutate } = useSWR<T | void>(
    shouldFetch ? url : null,
    fetcher,
    config
  );

  return {
    data: data || defaultValue,
    isLoading,
    isError: !!error,
    error: error,
    noAccess: error?.response?.status === 403,
    refresh: mutate,
  };
}
