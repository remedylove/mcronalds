import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

class Cart extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            cartCounter: this.props.cartItems.length
        }
    }
    render() {
        const { cartItems } = this.props;
        const amount = cartItems.length
        return (
            <div>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={amount} color="primary">
                        <ShoppingCartIcon fontSize="large" style={{color: 'gray'}}/>
                    </Badge>
                </IconButton>
            </div>
        )
    }
}

export default extractProductConsumer(['cartItems'])(Cart);