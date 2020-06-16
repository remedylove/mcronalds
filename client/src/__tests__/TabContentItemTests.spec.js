import React from 'react';
import renderer from "react-test-renderer";

import TabContentItem from "../components/TabContentItem/TabContentItem"

describe("CartContentItem test suite", () => {
    test("Should add photo", () => {
        const component = renderer.create(
            <TabContentItem image="testphoto.png" categoryName="zdjecie"/>
        );

        const properties = {
            "image": "testphoto.png",
            "categoryName": "zdjecie",
        };

        expect(component.root.props).toMatchObject(properties);
    });

    test("Should add category name", () => {
        const component = renderer.create(
            <TabContentItem categoryName="zdjecie"/>
        );

        const properties = {
            "categoryName": "zdjecie",
        };

        expect(component.root.props).toMatchObject(properties);
    });

    test("Should add image", () => {
        const component = renderer.create(
            <TabContentItem image="testphoto.png"/>
        );

        const properties = {
            "image": "testphoto.png",
        };

        expect(component.root.props).toMatchObject(properties);
    });
});