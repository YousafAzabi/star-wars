import React from "react";
import { create } from "react-test-renderer";
import CommonWinningAttribute from "../components/CommonWinningAttribute";

describe("CommonWinningAttribute component", () => {
  test("it matches the snapshot", () => {
    const component = create(<CommonWinningAttribute
      type='people'
      winningAttribute='mass'
      handleChange={console.log('change')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("it matches the snapshot", () => {
    const component = create(<CommonWinningAttribute
      type='people'
      winningAttribute='anything'
      handleChange={console.log('change')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("test display value equals 'mass'", () => {
    const component = create(<CommonWinningAttribute
      type='people'
      winningAttribute='mass'
      handleChange={console.log('change')} />
    );
    const rootInstance = component.root;
    const select = rootInstance.findByType('input');
    expect(select.props.value).toBe('mass');
  });

});
