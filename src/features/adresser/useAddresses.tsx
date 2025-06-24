import { useHTTP } from "../../api/useHTTP";
import type { KartverketAddressResponse } from "./Address";

export interface AdresseSearchParams {
  adressetekst: string;
  [key: string]: string | undefined;
}

export function useAddresses(
  params: AdresseSearchParams,
  shouldFetch = params.adressetekst?.length > 0
) {
  const query = new URLSearchParams();
  if (params.adressetekst) query.append("sok", params.adressetekst);
  query.append("fuzzy", "true");

  const url = `https://ws.geonorge.no/adresser/v1/sok?${query.toString()}`;

  const { data, error, isLoading } = useHTTP<KartverketAddressResponse>(
    url,
    {
      adresser: [],
      antallTreffTotalt: 0,
    } as KartverketAddressResponse,
    shouldFetch
  );

  return {
    data,
    error,
    isLoading,
  };
}
