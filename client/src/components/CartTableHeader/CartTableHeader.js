import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    columnName: {
        fontFamily: 'Permanent Marker',
        // fontWeight: 'bold',
        fontSize: '1.5rem',
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
            <Grid item xs={2} sm={2} md={2}>
                <Typography className={classes.columnName} variant="body1">Quantity</Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Typography className={classes.columnName} variant="body1">Customizations</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Typography className={classes.columnName} variant="body1">Remove</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Typography className={classes.columnName} variant="body1">Price</Typography>
            </Grid>
        </Grid>
    )
}

export default CartTableHeader;