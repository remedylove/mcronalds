import React from 'react';
import renderer from "react-test-renderer";

import IngredientsList from "../components/IngredientsList/IngredientsList"

describe("IngredientsList tests", () => {
    test("Should add title to IngredientsList", () => {
        const component = renderer.create(
            <IngredientsList title="mytitle"/>
        );

        const properties = {
            "title": "mytitle",
        };

        expect(component.root.props).toMatchObject(properties);
    });
});