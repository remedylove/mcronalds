import React from 'react';
import { Paper, Typography, Button, makeStyles } from '@material-ui/core';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em'
        // justifyContent: 'flex-end',
            // border: '1px solid #f2f2f2',
            // borderRadius: '5px',
        // height: '100%'
    },
    costsRow: {
        display: 'flex'
    },
    totalText: {
        fontFamily: 'Permanent Marker',
        width: '50%',
        marginBottom: '.25em'
    },
    button: {
        fontFamily: 'Permanent Marker',
        color: 'white',
        width: '100%'
    },
    value: {
        
    }
});

const CartCosts = ({ addOrder, cartItems }) => {
    let total = 0;
    cartItems.map(cartItem => {
        const { quantity, price } = cartItem;
        total += quantity * price;
    })

    const classes = useStyles();

    return (
        <Paper className={classes.container} square>
            <div className={classes.costsRow}>
                <Typography className={classes.totalText} variant="h5" align="left">Tax: </Typography>
                <Typography className={classes.totalText} variant="h5" align="right">${(total * 0.12).toFixed(2)}</Typography>
            </div>
            <div className={classes.costsRow}>
                <Typography className={classes.totalText} variant="h5" align="left">Total: </Typography>
                <Typography className={classes.totalText} variant="h5" align="right">${(total).toFixed(2)}</Typography>
            </div>
            <Button 
                className={classes.button} 
                variant="contained" 
                color="primary" 
                onClick={e => addOrder(cartItems)}
            >ORDER AND PAY
            </Button>
        </Paper>
    )
}

export default extractProductConsumer(['cartItems'])(CartCosts);

CartCosts.propTypes = {
    cartItems: PropTypes.array,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
}