import React, { useEffect, useState } from "react";
import { Country } from "../../models/Country";
import SortButtonWrapper from "./SortButton";
import { SortType } from "./SortButton/SortButton";

// Import the JSON data statically
import countriesData from "../../../country-json/src/country-by-name.json";
import populationData from "../../../country-json/src/country-by-population.json";
import areaData from "../../../country-json/src/country-by-surface-area.json";


export interface IAllProps {
  readonly currentSort?: SortType;
  readonly setCurrentSort: (_: SortType) => void;
  readonly sortAsc: boolean;
  readonly setSortAsc: (_: boolean) => void;
  readonly countries: any[];
}


const All = (props: IAllProps): JSX.Element => {
  const [countriesWithDetails, setCountriesWithDetails] = useState<Country[]>([]);

  useEffect(() => {
    const fetchPopulationData = () => {
      const countriesWithDetails = props.countries.map((country: any) => {
        const populationInfo = populationData.find((item: any) => item.country === country.country);
        const areaInfo = areaData.find((item: any) => item.country === country.country);
        return {
          ...country,
          population: populationInfo?.population || 'N/A',
          area: areaInfo?.area || 'N/A',
        };
      });
      setCountriesWithDetails(countriesWithDetails);
    };

    fetchPopulationData();
  }, [props.countries]);

  const sortedCountries = [...countriesWithDetails].sort((a: any, b: any) => {
    const { currentSort, sortAsc } = props;
    if (currentSort) {
      const isAsc = sortAsc ? 1 : -1;
      if (a[currentSort] < b[currentSort]) return -1 * isAsc;
      if (a[currentSort] > b[currentSort]) return 1 * isAsc;
    }
    return 0;
  });

  return (
    <div className="all-cities-table">
      <table>
        <thead>
          <tr>
            <th>
              Name <SortButtonWrapper type="name" {...props}></SortButtonWrapper>
            </th>
            <th>
              Population <SortButtonWrapper type="population" {...props}></SortButtonWrapper>
            </th>
            <th>
              Area <SortButtonWrapper type="area" {...props}></SortButtonWrapper>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCountries.map((c: Country, index: number) => (
            <tr key={index}>
              <td>{c.country}</td>
              <td>{c.population}</td>
              <td>{c.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All;
