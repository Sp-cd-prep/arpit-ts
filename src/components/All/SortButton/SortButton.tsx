import React from "react";
import { createClassName } from "../../../utils/helper";
import "./SortButton.less";

type SortType = 'name' | 'population' | 'area';

interface Props {
  readonly type: SortType;
  readonly currentSort?: SortType;
  readonly sortAsc: boolean;
  readonly setCurrentSort: (_: SortType) => void;
  readonly setSortAsc: (_: boolean) => void;
  readonly active?: boolean;
  readonly asc?: boolean;
}

const SortButton = ({ type, currentSort, sortAsc, setCurrentSort, setSortAsc, active, asc }: Props): JSX.Element => {
  const isActive = active ?? (type === currentSort);
  const isAsc = asc ?? sortAsc;

  const onClick = () => {
    if (isActive) {
      setSortAsc(!isAsc);
    } else {
      setCurrentSort(type);
      setSortAsc(true);
    }
  };

  const className = createClassName({
    "sort-button": true,
    active: isActive,
  });

  return (
    <a className={className} onClick={onClick}>
      {isActive && (isAsc ? "▲" : "▼")}
    </a>
  );
};

export default SortButton;
export type { SortType }; // Ensure SortType is exported
