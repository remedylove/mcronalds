import React, { Component } from 'react';
import { Grid, Container, Typography, withStyles } from '@material-ui/core'
import CartItem from '../../components/CartItem/CartItem';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import CartTableHeader from '../CartTableHeader/CartTableHeader';

const styles = {
    gridContainer: {
        border: '1px solid #f2f2f2', 
        borderRadius: '5px'
    }
}

class CartItemsList extends Component {

    render()    {
        const { cartItems, classes } = this.props;
        let background;
        return (
            <Container>
                <Grid className={classes.gridContainer} container >
                    <CartTableHeader />
                    {cartItems.map((cartItem, index) => {
                        index % 2 ? background = "#f2f2f2": background = "#fff";
                        return <CartItem cartItem={cartItem} background={background} />
                    })}
                </Grid>
            </Container>
        )
    }
}

export default extractProductConsumer(['cartItems'])(withStyles(styles)(CartItemsList));