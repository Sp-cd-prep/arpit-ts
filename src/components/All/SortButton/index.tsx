import React from "react";
import SortButton, { SortType } from "./SortButton";

interface Props {
  readonly type: SortType;
  readonly currentSort?: SortType;
  readonly sortAsc: boolean;
  readonly setCurrentSort: (newSort: SortType) => void;
}

const SortButtonWrapper = ({ type, currentSort, sortAsc, setCurrentSort }: Props): JSX.Element => {
  const [asc, setAsc] = React.useState<boolean>(sortAsc);

  const active = currentSort === type;

  React.useEffect(() => {
    if (active) {
      setAsc(sortAsc);
    }
  }, [sortAsc, active]);

  return (
    <SortButton
      type={type}
      currentSort={currentSort}
      sortAsc={sortAsc}
      setCurrentSort={setCurrentSort}
      setSortAsc={setAsc}
      active={active}
      asc={asc}
    />
  );
};

export default SortButtonWrapper;
