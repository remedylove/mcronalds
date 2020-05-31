import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
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
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={amount} color="primary">
                            <ShoppingCartIcon fontSize="large" style={{color: 'gray'}}/>
                        </Badge>
                    </IconButton>
                </Link>
            </div>
        )
    }
}

export default extractProductConsumer(['cartItems'])(Cart);

Cart.propTypes = {
    amount: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
}