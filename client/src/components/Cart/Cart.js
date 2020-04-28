import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        console.log(cartItems.length);
        return (
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartIcon fontSize="large" style={{color: 'gray'}}/>
                </Badge>
            </IconButton>
        )
    }
}

export default extractProductConsumer(['cartItems'])(Cart);