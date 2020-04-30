import React, { Component } from 'react'
import { Grid, Typography, Button, IconButton, withStyles } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

const styles = {
    gridItem: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    customizations: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}

class CartItem extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    incrementQuantity = () =>   {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1
        }))
    }

    decrementQuantity = () =>   {
        this.setState(prevState => ({
            quantity: prevState.quantity - 1
        }))
    }

    get isDisabled()    {
        const { quantity } = this.state;
        return quantity <= 1;
    }

    render() {
        const { quantity } = this.state;
        const { cartItem, removeItemFromCart, classes } = this.props;
        const { id, title, price, customization } = cartItem;
        return (
            <>
                <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                    <Typography variant="body2" align="center">{title}</Typography>
                </Grid>
                <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                    <IconButton variant="outlined" onClick={this.decrementQuantity} disabled={this.isDisabled}>
                        <IndeterminateCheckBoxIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="body2" align="center">{quantity}</Typography>
                    <IconButton variant="outlined" onClick={this.incrementQuantity}>
                        <AddBoxIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid className={classes.customizations} item xs={4} sm={4} md={4}>
                    <div className={classes.gridItem}>
                        {Boolean(customization.added.length) && <Typography variant="body2">Added: {customization.added.join(', ')}</Typography>}
                    </div>
                    <div className={classes.gridItem}>
                        {Boolean(customization.removed.length) && <Typography variant="body2">Removed: {customization.removed.join(', ')}</Typography>}
                    </div>
                </Grid>
                <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                    <IconButton onClick={e => removeItemFromCart(id)} >
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid className={classes.gridItem} item xs={2} sm={2} md={2}>
                    <Typography variant="body2" align="center">{quantity * price}</Typography>
                </Grid>
            </>
        )
    }
}

export default extractProductConsumer(['removeItemFromCart'])(withStyles(styles)(CartItem));