import React from "react";
import { create } from "react-test-renderer";
import TypeSelect from "../components/TypeSelect";

describe("TypeSelect component", () => {
  test("it matches the snapshot", () => {
    const component = create(<TypeSelect type='people'
      handleChange={console.log('change')} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("it matches the snapshot", () => {
    const component = create(<TypeSelect type='starships'
      handleChange={console.log('change')} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("test display value equals 'starships'", () => {
    const component = create(<TypeSelect type='starships'
      handleChange={console.log('change')} />);
    const rootInstance = component.root;
    const select = rootInstance.findByType('input');
    expect(select.props.value).toBe('starships');
  });
});
