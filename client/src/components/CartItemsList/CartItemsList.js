import React, { Component } from 'react';
import { Grid, Container, Paper, withStyles } from '@material-ui/core'
import CartItem from '../../components/CartItem/CartItem';
import CartTableHeader from '../CartTableHeader/CartTableHeader';
import CartCosts from '../../components/CartCosts/CartCosts';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

const styles = {
    Paper: {
        padding: '1em 1em .25em'
    }
}

class CartItemsList extends Component {

    render()    {
        const { cartItems, classes } = this.props;
        let background;
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
                        <CartCosts />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default extractProductConsumer(['cartItems'])(withStyles(styles)(CartItemsList));