import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    columnName: {
        fontWeight: 'bold',
        // background: '#f2f2f2',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px'
    }
})

const CartTableHeader = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={3} sm={3} md={3}>
                <Typography className={classes.columnName} variant="body1">Product</Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
                <Typography className={classes.columnName} variant="body1">Quantity</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography className={classes.columnName} variant="body1">Customizations</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Typography className={classes.columnName} variant="body1">Remove</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Typography className={classes.columnName} variant="body1">Total</Typography>
            </Grid>
        </Grid>
    )
}

export default CartTableHeader;