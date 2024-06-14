import React from "react";
// import { Country } from "../../models/Country";
import { Country } from "src/models/Country";
import countriesData from "../../../../country-json/src/country-by-name.json";

interface Props {
  searchTerm: string;
  selectedCountries: Country[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

const Filtered = ({ searchTerm, selectedCountries, setSelectedCountries }: Props): JSX.Element => {
  const filteredCountries = countriesData.filter((country: Country) =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addCountry = (country: Country) => {
    if (!selectedCountries.some((c) => c.country === country.country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <div>
      {filteredCountries.map((country, index) => (
        <div key={index}>
          <a onClick={() => addCountry(country)}>{country.country}</a>
        </div>
      ))}
    </div>
  );
};

export default Filtered;
