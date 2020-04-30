import React from 'react'
import { Grid, Typography, IconButton, makeStyles } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

const useStyles = makeStyles({
    gridItem: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: ({ background }) => background
    },
    customizations: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: ({ background }) => background
    },
    productImage: {
        width: '100%'
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
    removeIcon: {

    }
});

const CartItem = ({ cartItem, background, removeItemFromCart, incrementQuantity, decrementQuantity }) => {

    const classes = useStyles({ background });
    const { id, title, price, customization, image, quantity } = cartItem;
    return (
        <>
            <Grid className={classes.gridItem} item xs={1} sm={1} md={1}>
                <img className={classes.productImage} src={image} alt="" />
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <Typography variant="body1" align="center">{title}</Typography>
            </Grid>
            <Grid className={classes.gridItem} item xs={1} sm={1} md={1}>
                <IconButton className={classes.minusButton} onClick={e => decrementQuantity(id)}>
                    <IndeterminateCheckBoxIcon className={classes.minusIcon} fontSize="large" />
                </IconButton>
                <Typography variant="body1" align="center">{quantity}</Typography>
                <IconButton className={classes.plusButton} onClick={e => incrementQuantity(id)}>
                    <AddBoxIcon className={classes.plusIcon} fontSize="large" />
                </IconButton>
            </Grid>
            <Grid className={classes.customizations} item xs={4} sm={4} md={4}>
                <div className={classes.gridItem}>
                    {Boolean(customization.added.length) && <Typography variant="body1">Added: {customization.added.join(', ')}</Typography>}
                </div>
                <div className={classes.gridItem}>
                    {Boolean(customization.removed.length) && <Typography variant="body1">Removed: {customization.removed.join(', ')}</Typography>}
                </div>
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <IconButton onClick={e => removeItemFromCart(id)} >
                    <DeleteIcon style={{color: 'blue'}} fontSize="large" />
                </IconButton>
            </Grid>
            <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                <CurrencyFormat value={quantity * price} displayType={'text'} prefix={'$'}/>
            </Grid>
        </>
        )
}

export default extractProductConsumer(['removeItemFromCart', 'incrementQuantity', 'decrementQuantity'])(CartItem);