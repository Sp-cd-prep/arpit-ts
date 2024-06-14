import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import All from "@components/All/All";
import Selected from "@components/Selected";
import "./App.less";
import { SortType } from "@components/All/SortButton/SortButton";
const countryByName = require("../../../country-json/src/country-by-name.json");

const App = (): JSX.Element => {
  const [currentSort, setCurrentSort] = useState<SortType | undefined>(undefined);
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  return (
    <div className="componentWrapper">
      <BrowserRouter>
        <nav className="routingWrapper">
          <Link to="/all">All Countries</Link>
          <Link to="/selected">Selected Countries</Link>
        </nav>
        <Routes>
          <Route
            path="/all"
            element={
              <All
                currentSort={currentSort}
                setCurrentSort={setCurrentSort}
                sortAsc={sortAsc}
                setSortAsc={setSortAsc}
                countries={countryByName}  // Pass countries prop here
              />
            }
          />
          <Route path="/selected" element={<Selected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
