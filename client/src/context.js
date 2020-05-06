import React, { Component, createContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const ProductContext = createContext();

class ProductProvider extends Component {
    constructor(props)   {
        super(props);
        this.state = {
            products: {},
            detailProduct: {},
            categoryProducts: [],
            cartItems: this.getCartItems(),
            isReady: false
        };
    }

    componentDidMount() {
        axios.get('/api/products')
            .then(products => this.setState({products: products.data, isReady: true}))
    }
    
    getItemToDetails = title => {
        const product = this.state.products.find(item => item.title.toLowerCase() === title.toLowerCase());
        return product ? product : <Redirect to="/404" />;
    }

    getItem = id => {
        const product = this.state.products.find(item => item._id === id);
        return product;
    }

    getCategoryProducts = detailProduct =>    {
        const categoryProducts = this.state.products.filter(product => product.category === detailProduct.category && product.title !== detailProduct.title).slice(0, 3);
        return categoryProducts;
    }

    handleDetail = title =>    {
        console.log(this.state.products);
        const detailProduct = this.getItemToDetails(title);
        const categoryProducts = this.getCategoryProducts(detailProduct);
        this.setState({
            ...this.state,
            detailProduct,
            categoryProducts
        }, console.log(this.state))
    }

    incrementQuantity = id => {
        const { cartItems } = this.state;
        const cartProduct = cartItems.find(item => item._id === id);
        cartProduct.quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.setState({
            cartItems: this.getCartItems()
        });
    }

    decrementQuantity = id => {
        const { cartItems } = this.state;
        const cartProduct = cartItems.find(item => item._id === id);
        if(cartProduct.quantity >= 2) {
            cartProduct.quantity -= 1;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.setState({
                cartItems: this.getCartItems()
            });
        }
    }

    addItemToCart = id => {
        console.log(id);
        const product = this.getItem(id);
        const { cartItems } = this.state;
        const isInCartYet = cartItems.find(item => item._id === id);
        console.log(isInCartYet);
        if(isInCartYet) {
            isInCartYet.quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.setState({
                cartItems: this.getCartItems()
            });
        } else {
            product.quantity = 1;
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.setState({
                cartItems: this.getCartItems()
            });
        }
    }
    
    addProductToCart = product => {
        const { cartItems } = this.state;
        product.quantity = 1;
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.setState({
            cartItems: this.getCartItems()
        })
    }

    removeItemFromCart = id => {
        const { cartItems } = this.state;
        const updatedCartItems = cartItems.filter(item => item._id !== id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        this.setState({
            cartItems: this.getCartItems()
        });
    }

    getCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
     
        return cartItems;
    }

    render() {
        const { isReady } = this.state;
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addItemToCart: this.addItemToCart,
                removeItemFromCart: this.removeItemFromCart,
                addProductToCart: this.addProductToCart,
                incrementQuantity: this.incrementQuantity,
                decrementQuantity: this.decrementQuantity,
                getItemToDetails: this.getItemToDetails
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
