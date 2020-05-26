import React from 'react';
import Order from '../../components/Order/Order';
import Loader from '../../components/Loader/Loader';


const OrdersList = ({ orders, isReady, handleOrder, cancelOrder }) => {
    return (
        isReady
        ? <div>
            {orders.reduce(function(filtered, order, index)    {
                if(!order.handled)  {
                    const filteredOrder = { ...order, index }
                    filtered.push(filteredOrder);
                }
                return filtered;
            }, []).map(order => {
                return <Order key={order._id} index={order.index} order={order} handleOrder={handleOrder} cancelOrder={cancelOrder} />
            })}
        </div>
        : <Loader />
    )
}

export default OrdersList
