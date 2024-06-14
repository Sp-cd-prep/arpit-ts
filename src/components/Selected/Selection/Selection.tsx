import React from "react";
// import { Country } from "../../models/Country";
import { Country } from "src/models/Country";

interface Props {
  selectedCountries: Country[];
}

export const Selection = ({ selectedCountries }: Props): JSX.Element => {
  return (
    <>
      {selectedCountries.map((country, index) => (
        <div key={index}>
          <a>{country.country}</a>
        </div>
      ))}
    </>
  );
};
