import React from 'react';
import renderer from "react-test-renderer";

import MyAlert from "../components/MyAlert/MyAlert"

describe("MyAlert test suite", () => {
  test("Should create black alert with example message", () => {
    const component = renderer.create(
        <MyAlert color="black" alertMsg="example message"/>
    );

    const properties = {
        "alertMsg": "example message",
        "color": "black"
    };

    expect(component.root.props).toMatchObject(properties);
  });

  test("Should create white alert with second example message", () => {

    const component = renderer.create(
        <MyAlert color="white" alertMsg="second example message" isOpen={true} />
    );

    const properties = {
        "alertMsg": "second example message",
        "color": "white",
        "isOpen": true
    };

    expect(component.root.props).toMatchObject(properties);
  });
});
