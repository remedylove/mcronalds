import React, { Component } from 'react'
import axios from 'axios';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer'
import Logo from '../../components/Logo/Logo';
import { Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItemsList from '../../components/CartItemsList/CartItemsList';
import CartCosts from '../../components/CartCosts/CartCosts';
import CartModal from '../../components/CartModal/CartModal';

const styles = {
    button: {
        fontFamily: 'Permanent Marker',
        color: '#fff',
    },
    cartStateText: {
        fontFamily: 'Permanent Marker',
        fontWeight: 'bold',
        margin: '.25em auto'
    }
}

class CartPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            cartItems: this.props.cartItems,
            modal: false
        }
    }

    addOrder = cartItems =>    {
        
        const itemCarts = {
            products: cartItems
        }

        axios.post('/api/orders', itemCarts)
        .then(console.log)
        .catch(console.log)
    }

    toggle = () =>  {
        this.setState(prevState =>  ({
            modal: !prevState.modal
        }));
    }

    render() {
        const { modal } = this.state;
        const { classes, cartItems } = this.props;
        return (
            <div>
                <Logo />
                <CartModal modal={modal} toggle={this.toggle} />
                {Boolean(cartItems.length) 
                    ? <>
                        <Typography className={classes.cartStateText} variant="h2">Your cart</Typography>
                        <CartItemsList addOrder={this.addOrder} toggle={this.toggle} />
                      </>
                    : <>
                        <Typography className={classes.cartStateText} variant="h2">Your cart is empty</Typography>
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