import React, { useState } from "react";
// import Filtered from "./Filtered";
// import SearchField from "./SearchField";
// import Selection from "./Selection";
import { Country } from "src/models/Country";
import { SearchField } from "./SearchField/SearchField";
import Filtered from "./Filtered/Filtered";
import { Selection } from "./Selection/Selection";





export const Selected = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  return (
    <div>
      <SearchField {...{value:searchTerm, updateValue:setSearchTerm}} />
      <h2>Found Countries:</h2>
      {/* <Filtered searchTerm={searchTerm} selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}></Filtered> */}
      <Filtered {...{searchTerm:searchTerm, selectedCountries:selectedCountries, setSelectedCountries:setSelectedCountries}}/>

      <h2>Selected Countries:</h2>
      {/* <Selection selectedCountries={selectedCountries}></Selection> */}
      <Selection {...{selectedCountries:selectedCountries}}/>
    </div>
  );
};
