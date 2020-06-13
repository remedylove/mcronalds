import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Cart extends Component {

    render() {
        const { cartItems } = this.props;

        let amount = 0;
        cartItems.map(cartItem => amount += cartItem.quantity);
        
        return (
            <div>
                <Link to='/cart'>
                    <IconButton color="inherit">
                        <Badge badgeContent={<Typography style={{fontFamily: 'Permanent Marker'}}>{amount}</Typography>} color="primary">
                            <ShoppingCartIcon fontSize="large" style={{color: '#707070'}}/>
                        </Badge>
                    </IconButton>
                </Link>
            </div>
        )
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    amount: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
}

export default extractProductConsumer(['cartItems'])(Cart);