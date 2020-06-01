import React, { Component } from 'react';
import ProductPresentation from '../ProductPresentation/ProductPresentation';
import IngredientsList from '../IngredientsList/IngredientsList';
import PropTypes from 'prop-types';

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

SingleProductView.propTypes = {
    title: PropTypes.string,
    detailProduct: PropTypes.object,
    ingredients: PropTypes.string,
};