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
        this.setState({
            cartItems: this.getCartItems()
        })
    }

    removeItemFromCart = id => {
        // const product = this.getItem(id);
        // console.log(product);
        console.log(this.state.cartItems);
        const { cartItems } = this.state;
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        this.setState({
            cartItems: this.getCartItems()
        });
        // console.log(this.state.cartItems);
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
                addItemToCart: this.addItemToCart,
                removeItemFromCart: this.removeItemFromCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
