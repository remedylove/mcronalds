import React from 'react'
import { Grid, Typography, IconButton, makeStyles } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    gridContainer: {
        margin: '.75em auto'
    },
    gridItem: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    customizations: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    productImage: {
        width: '100%'
    },
    productName: {
        textTransform: 'capitalize'
    },
    minusButton : {
        '&:hover': {
            '& $minusIcon': {
                color: 'red'
            }
        }
    },
    minusIcon: {
        color: '#cd5c5c',

        transition: '.5s ease'
    },
    plusButton: {
        '&:hover': {
            '& $plusIcon': {
                color: 'green'
            }
        }
    },
    plusIcon: {
        color: '#32cd32',
        transition: '.5s ease'
    },
    deletIcon: {
        color: 'blue'
    }
});

const CartItem = ({ cartItem, removeItemFromCart, incrementQuantity, decrementQuantity }) => {

    const classes = useStyles();
    const { _id, title, price, customization, quantity } = cartItem;
    
    return (
        <Grid className={classes.gridContainer} container>
            <Grid className={classes.gridItem} item xs={1} sm={1} md={1}>
                <img className={classes.productImage} src={require(`../../assets/${title}.jpg`)} alt="" />
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <Typography className={classes.productName} variant="body1" align="center">{title}</Typography>
            </Grid>
            <Grid className={classes.gridItem} item xs={1} sm={1} md={1}>
                <IconButton className={classes.minusButton} onClick={e => decrementQuantity(_id)}>
                    <IndeterminateCheckBoxIcon className={classes.minusIcon} fontSize="large" />
                </IconButton>
                <Typography variant="body1" align="center">{quantity}</Typography>
                <IconButton className={classes.plusButton} onClick={e => incrementQuantity(_id)}>
                    <AddBoxIcon className={classes.plusIcon} fontSize="large" />
                </IconButton>
            </Grid>
            <Grid className={classes.customizations} item xs={4} sm={4} md={4}>
                <div className={classes.gridItem}>
                    {!!customization.added.length && <Typography variant="body1">Added: {customization.added.join(', ')}</Typography>}
                </div>
                <div className={classes.gridItem}>
                    {!!customization.removed.length && <Typography variant="body1">Removed: {customization.removed.join(', ')}</Typography>}
                </div>
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <IconButton onClick={e => removeItemFromCart(_id)} >
                    <DeleteIcon className={classes.deletIcon} fontSize="large" />
                </IconButton>
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <CurrencyFormat value={quantity * price} displayType={'text'} prefix={'$'}/>
            </Grid>
        </Grid>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object, 
    removeItemFromCart: PropTypes.func, 
    incrementQuantity: PropTypes.func, 
    decrementQuantity: PropTypes.func,
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    customization: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default extractProductConsumer(['removeItemFromCart', 'incrementQuantity', 'decrementQuantity'])(CartItem);