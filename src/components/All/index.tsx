import React from "react";
import All from "@components/All/All";
import { SortType } from "./SortButton/SortButton";
const countryByName = require("../../../country-json/src/country-by-name.json");

const AllWrapper = (): JSX.Element => {
  const [currentSort, setCurrentSort] = React.useState<SortType>();
  const [sortAsc, toggleSortAsc] = React.useState<boolean>(true);

  const handleSortUpdate = (newType: SortType) => {
    if (newType === currentSort) {
      toggleSortAsc(!sortAsc);
    }
    setCurrentSort(newType);
  };

  return (
    <All 
      currentSort={currentSort}
      sortAsc={sortAsc}
      countries={countryByName}
      setCurrentSort={handleSortUpdate}
      setSortAsc={toggleSortAsc}  // Pass setSortAsc here as well
    />
  );
};

export default AllWrapper;
