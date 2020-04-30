import React, { Component } from 'react';
import ProductPresentation from '../ProductPresentation/ProductPresentation';
import IngredientsList from '../IngredientsList/IngredientsList';

class SingleProductView extends Component {
    constructor(props)   {
        super(props);
    }

    render() {
        const { id, title, description, calories, ingredients, imageDetails } = this.props;
        return (
            <div>
                <React.Fragment>
                    <ProductPresentation id={id} title={title} calories={calories} description={description} imageDetails={imageDetails} />
                    <IngredientsList title={title} ingredients={ingredients}/>
                </React.Fragment>
            </div>
        );
    }
}

export default SingleProductView;