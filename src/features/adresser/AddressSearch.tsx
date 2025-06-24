import React, { useState } from "react";
import { AsyncContent } from "../../components/asyncContent/Index";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Drawer } from "../../components/drawer";
import { Gallery } from "../../components/gallery";
import { Input } from "../../components/input";
import { LabelValue } from "../../components/labelValue";
import { NoContent } from "../../components/noContent";
import { ArrowRight } from "../../icons/ArrowRight";
import { useDebounce } from "../../utilities/useDebounce";
import type { Adresse } from "./Address";
import { useAddresses, type AdresseSearchParams } from "./useAddresses";

const AddressSearch: React.FC = () => {
  const [adressetekst, setAdressetekst] = useState("");
  const debouncedQuery = useDebounce(adressetekst, 500);
  const [selected, setSelected] = useState<Adresse | null>(null);

  const searchParams: AdresseSearchParams = {
    adressetekst: debouncedQuery,
  };

  const { data, error, isLoading } = useAddresses(searchParams);

  return (
    <>
      <Input
        type="text"
        placeholder="Skriv inn adresse, gate eller sted"
        value={adressetekst}
        onChange={(e) => setAdressetekst(e.target.value)}
        name="adressetekst"
      />
      <AsyncContent
        isLoading={isLoading}
        error={error}
        isEmptyResult={
          data.adresser.length < 1 && searchParams.adressetekst?.length > 0
        }
        emptyResultComponent={
          <NoContent message="Her var du litt for snever, vi fant ingen adresser!" />
        }
      >
        {isLoading && <p>Laster data...</p>}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {data && (
          <Gallery>
            {data.adresser.map((addr) => (
              <Card
                key={addr.adressetekst}
                title={addr.adressetekst}
                footer={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Button
                      icon={<ArrowRight />}
                      iconPosition="right"
                      variant="transparent"
                      onClick={() => setSelected(addr)}
                    >
                      Vis mer
                    </Button>
                  </div>
                }
              >
                <div>
                  <div>
                    <strong>Poststed:</strong> {addr.poststed} (
                    {addr.postnummer})
                  </div>
                  <div>
                    <strong>Kommune:</strong> {addr.kommunenavn}
                  </div>
                  <div>
                    <strong>Gnr/Bnr:</strong> {addr.gardsnummer}/
                    {addr.bruksnummer}
                  </div>
                </div>
              </Card>
            ))}
          </Gallery>
        )}
      </AsyncContent>

      <Drawer
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.adressetekst}
      >
        {selected && (
          <div>
            <LabelValue label="Kommune" value={selected.kommunenavn} />
            <LabelValue label="Postnummer" value={selected.postnummer} />
            <LabelValue
              label="Gnr/Bnr"
              value={`${selected.gardsnummer}/${selected.bruksnummer}`}
            />
            <LabelValue
              label="Koordinater"
              value={`${selected.representasjonspunkt.lat},${selected.representasjonspunkt.lon}
            `}
            />
            <LabelValue label="Oppdatert" value={selected.oppdateringsdato} />
          </div>
        )}
      </Drawer>
    </>
  );
};

export default AddressSearch;
