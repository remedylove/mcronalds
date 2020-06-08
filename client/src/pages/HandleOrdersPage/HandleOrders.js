import React, { Component } from 'react';
import axios from 'axios';
import StaffNavbar from '../../components/StaffNavbar/StaffNavbar';
import OrdersList from '../../components/OrdersList/OrdersList';
import MyAlert from '../../components/MyAlert/MyAlert';

class HandleOrders extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            orders: {},
            isReady: false,
            alertOpen: false,
            color: '',
            alertMsg: ''
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        setInterval(() => {
            axios.get('/api/orders')
            .then(res => res.data.reduce(function(filtered, order, index)    {
                if(!order.handled)  {
                    const filteredOrder = { ...order, index }
                    filtered.push(filteredOrder);
                }
                return filtered;
            }, []))
            .then(res => this.setState({orders: res, isReady: true}))
        }, 1000);
    }

    handleOrder = id => {
        
        const isHandled = {
            handled: true
        }

        axios.put(`/api/orders/${id}`, isHandled)
        .then(this.setState({alertOpen: true, alertMsg: 'The order has been handled.', color: 'success'}))
        .catch(console.log)
    }

    cancelOrder = id => {

        axios.delete(`/api/orders/${id}`)
        .then(this.setState({alertOpen: true, alertMsg: 'The order has been deleted.', color: 'danger'}))
        .catch(console.log)

    }

    onDismiss = () => {
        this.setState({
            alertOpen: false
        });
    }

    render() {
        const { orders, isReady, alertOpen, alertMsg, color } = this.state;
        
        return (
            <>
                <StaffNavbar />
                <MyAlert isOpen={alertOpen} color={color} toggle={this.onDismiss} alertMsg={alertMsg}/>
                <OrdersList orders={orders} isReady={isReady} handleOrder={this.handleOrder} cancelOrder={this.cancelOrder} />
            </>
        )
    }
}

export default HandleOrders;