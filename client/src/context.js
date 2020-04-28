import React, { Component, createContext } from 'react';

import storeProducts from './store';

const ProductContext = createContext();

class ProductProvider extends Component {
    constructor(props)   {
        super(props);
        this.state = {
            products: storeProducts,
            detailProduct: {},
            categoryProducts: [],
            cartItems: this.getCartItems()
        };
    }

    getItem = id => {
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

    addItemToCart = id => {
        const product = this.getItem(id);
        const { cartItems } = this.state;
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    getCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
     
        return cartItems;
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addItemToCart: this.addItemToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
