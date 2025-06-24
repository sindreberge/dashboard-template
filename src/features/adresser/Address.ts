export interface Representasjonspunkt {
  epsg: string;
  lat: number;
  lon: number;
}

export interface Adresse {
  adressenavn: string;
  adressetekst: string;
  adressetilleggsnavn: string | null;
  adressekode: number;
  nummer: number;
  bokstav: string;
  kommunenummer: string;
  kommunenavn: string;
  gardsnummer: number;
  bruksnummer: number;
  festenummer: number;
  undernummer: number | null;
  bruksenhetsnummer: string[];
  objtype: string;
  poststed: string;
  postnummer: string;
  adressetekstutenadressetilleggsnavn: string;
  stedfestingverifisert: boolean;
  representasjonspunkt: Representasjonspunkt;
  oppdateringsdato: string;
}

export interface KartverketAddressResponse {
  adresser: Adresse[];
  antallTreffTotalt: number;
}
