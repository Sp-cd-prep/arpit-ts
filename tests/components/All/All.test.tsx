// import All, { IAllProps } from "@components/All/All"; // Correct the import statement
import React from "react";
import renderer from "react-test-renderer";

import All, { IAllProps } from "@components/All/All";


describe("All component", () => {
  test("should render component properly", () => {
    // given
    const dummyComponentProps: IAllProps = {
      currentSort: undefined,
      sortAsc: false,
      countries: [], // Add this prop
      setCurrentSort: jest.fn(),
      setSortAsc: jest.fn(), // Add this prop
    };

    // when
    const componentRenderer = renderer.create(<All {...dummyComponentProps} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
