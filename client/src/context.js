import React, { Component, createContext } from 'react'

import storeProducts from './store';
import { detailProduct } from './store';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct
    };

    componentDidMount() {
        this.setProducts();
    }
    
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem];
        });
        this.setState(() => (
            {
                ...this.state,
                products
            }
        ));
    }

    getItem = id => {
        console.log(id);
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id =>    {
        const detailProduct = this.getItem(id);
        this.setState(({
            ...this.state,
            detailProduct
        }))
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
