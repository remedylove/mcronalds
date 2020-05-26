import React, { Component } from 'react';
import axios from 'axios';
import OrdersList from '../../components/OrdersList/OrdersList';

class HandleOrders extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            orders: {},
            isReady: false
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        setInterval(() => {
            axios.get('/api/orders')
            .then(res => this.setState({orders: res.data, isReady: true}))
        }, 5000);
    }

    handleOrder = id => {
        
        const isHandled = {
            handled: true
        }

        axios.put(`/api/orders/${id}`, isHandled)
        .then(console.log)
        .catch(console.log)
    }

    cancelOrder = id => {

        axios.delete(`/api/orders/${id}`)
        .then(console.log)
        .catch(console.log)

    }

    render() {
        const { orders, isReady } = this.state;
        
        return (
            <OrdersList orders={orders} isReady={isReady} handleOrder={this.handleOrder} cancelOrder={this.cancelOrder} />
        )
    }
}

export default HandleOrders;