import React, { Component, createContext } from 'react'

import storeProducts from './store';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: {}
    };

    getItem = id => {
        console.log(id);
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id =>    {
        const detailProduct = this.getItem(id);
        this.setState({
            ...this.state,
            detailProduct
        }, console.log(this.state))
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
