import React from 'react';
import Order from '../../components/Order/Order';
import Loader from '../../components/Loader/Loader';
import { Typography } from '@material-ui/core';

const OrdersList = ({ orders, isReady, handleOrder, cancelOrder }) => {
    return (
        isReady
        ? <div>
            {!!orders.length 
            ? orders.map(order => {
                return <Order key={order._id} index={order.index} order={order} handleOrder={handleOrder} cancelOrder={cancelOrder} />
            })
            : <Typography style={{fontFamily: 'Permanent Marker', margin: '.6em auto'}} variant="h2">No orders to be handled.</Typography>}
        </div>
        : <Loader />
    )
}

export default OrdersList
