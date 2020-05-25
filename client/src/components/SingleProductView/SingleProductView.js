import React, { Component } from 'react';
import ProductPresentation from '../ProductPresentation/ProductPresentation';
import IngredientsList from '../IngredientsList/IngredientsList';

class SingleProductView extends Component {
    constructor(props)   {
        super(props);
    }

    render() {
        const { title, detailProduct } = this.props;
        const { ingredients } = detailProduct;
        return (
            <div>
                <React.Fragment>
                    <ProductPresentation />
                    <IngredientsList title={title} ingredients={ingredients}/>
                </React.Fragment>
            </div>
        );
    }
}

export default SingleProductView;