import React, { Component } from 'react';
import { Grid, Container, Paper, withStyles } from '@material-ui/core'
import CartItem from '../../components/CartItem/CartItem';
import CartTableHeader from '../CartTableHeader/CartTableHeader';
import CartCosts from '../../components/CartCosts/CartCosts';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';

const styles = {
    Paper: {
        padding: '1em 1em .25em'
    }
}

class CartItemsList extends Component {

    render()    {
        const { cartItems, classes, addOrder, toggle } = this.props;
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        <Paper className={classes.Paper}>
                            <CartTableHeader />
                            {cartItems.map(cartItem => {
                                return <CartItem cartItem={cartItem} />
                            })}
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <CartCosts addOrder={addOrder} toggle={toggle}/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

CartItemsList.propTypes = {
    cartItems: PropTypes.array, 
    classes: PropTypes.object, 
    addOrder: PropTypes.func
}

export default extractProductConsumer(['cartItems'])(withStyles(styles)(CartItemsList));