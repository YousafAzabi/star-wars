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

  test("test title text", () => {
    const component = create(<Player
      title='Player One'
      type='people'
      details={{name: 'foo', mass: 20, height: 50}}
      winningAttribute='mass'/>
    );
    const rootInstance = component.root;
    const title = rootInstance.findByType('h5');
    expect(title.props.children[0]).toBe('Player One');
  });

  test("test badge text", () => {
    const component = create(<Player
      title='Player One'
      type='people'
      details={{name: 'foo', mass: 20, height: 50}}
      winningAttribute='mass'/>
    );
    const rootInstance = component.root;
    const badge = rootInstance.findByType('span');
    expect(badge.props.children).toBe('mass');
  });

});
