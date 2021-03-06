import React from 'react';
import Order from '../../components/Order/Order';
import Loader from '../../components/Loader/Loader';
import PropTypes from 'prop-types';
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

OrdersList.propTypes = {
    orders: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), 
    isReady: PropTypes.bool, 
    handleOrder: PropTypes.func, 
    cancelOrder: PropTypes.func
}

export default OrdersList
