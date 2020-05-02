import React, { Component } from 'react'
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer'
import Logo from '../../components/Logo/Logo';
import { Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItemsList from '../../components/CartItemsList/CartItemsList';
import CartCosts from '../../components/CartCosts/CartCosts';

const styles = {
    button: {
        fontFamily: 'Permanent Marker',
        color: '#fff',
    }
}

class CartPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            cartItems: this.props.cartItems
        }
    }

    render() {
        const { cartItems } = this.props;
        const { classes } = this.props;
        return (
            <div>
                <Logo />
                {Boolean(cartItems.length) 
                    ? <>
                        <Typography style={{margin: '.25em auto', fontWeight: 'bold', fontFamily: 'Permanent Marker'}} variant="h2">Your cart</Typography>
                        <CartItemsList />
                      </>
                    : <>
                        <Typography style={{margin: '.25em auto', fontWeight: 'bold', fontFamily: 'Permanent Marker'}} variant="h2">Your cart is empty</Typography>
                        <Link className="link" to="/create-order">
                            <Button 
                                className={classes.button} 
                                variant="contained" 
                                color="primary" 
                                size="large" 
                                margin="normal"
                            >
                                Back to product list
                            </Button>
                        </Link>
                      </>
                }
            </div>
        )
    }
}

export default extractProductConsumer(['cartItems'])(withStyles(styles)(CartPage));