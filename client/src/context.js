import React, { Component, createContext } from 'react';

import storeProducts from './store';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: {},
        categoryProducts: []
    };

    getItem = id => {
        console.log(id);
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    getCategoryProducts = detailProduct =>    {
        const categoryProducts = this.state.products.filter(product => product.category === detailProduct.category && product.id !== detailProduct.id).slice(0, 3);
        return categoryProducts;
    }

    handleDetail = id =>    {
        const detailProduct = this.getItem(id);
        const categoryProducts = this.getCategoryProducts(detailProduct);
        this.setState({
            ...this.state,
            detailProduct,
            categoryProducts
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
