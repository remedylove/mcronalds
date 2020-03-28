import React, { Component, createContext } from 'react'

import { products, detailProduct } from './store';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products,
        detailProduct
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
