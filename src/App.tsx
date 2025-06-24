import "./App.css";
import { Hero } from "./components/hero";
import AddressSearch from "./features/adresser/AddressSearch";

function App() {
  return (
    <>
      <Hero title="Adresser" subtitle="Søk etter adresser" />
      <AddressSearch />
    </>
  );
}

export default App;
