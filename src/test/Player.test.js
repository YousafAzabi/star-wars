import React from "react";
import { create } from "react-test-renderer";
import Player from "../components/Player";

describe("Player component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Player
      title='Player One'
      type='people'
      details={{name: 'foo', mass: 20, height: 50}}
      winningAttribute='mass'/>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("it matches the snapshot", () => {
    const component = create(<Player
      title='Player One'
      type='people'
      details={{name: 'foo', mass: 20, height: 50}}
      winningAttribute='mass'/>
    );
    const rootInstance = component.root;
    const title = rootInstance.findByType('p');
    expect(title.props.children).toBe('Player One');
  });

  test("it matches the snapshot", () => {
    const component = create(<Player
      title='Player One'
      type='people'
      details={{name: 'foo', mass: 20, height: 50}}
      winningAttribute='mass'/>
    );
    const rootInstance = component.root;
    const badge = rootInstance.findByType('span');
    expect(badge.props.children[1].type).toBe('span');
  });

});
