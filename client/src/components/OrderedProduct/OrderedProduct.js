import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    orderedProductWrapper: {
        display: 'flex', 
        padding: '.5em 0',
        width: '100%'
    },
    productGridContainer: {
        padding: '.25em 2.5em'
    },
    productGridItem: {
        fontFamily: 'Permanent Marker',
        color: '#777'
    },
    customizationRemoved: {
        fontFamily: 'Permanent Marker',
        color: 'red'
    },
    customizationAdded: {
        fontFamily: 'Permanent Marker',
        color: 'green'
    },
    productName:    {
        textTransform: 'capitalize',
    }
});

const OrderedProduct = ({ title, removed, added, quantity }) => {

    const classes = useStyles();

    return (
        <div className={classes.orderedProductWrapper}>
            <Grid className={classes.productGridContainer} container>
                <Grid item md={3}>
                    <Typography className={`${classes.productGridItem} ${classes.productGridItem}`}>{title}</Typography>
                </Grid>
                <Grid item md={6}>
                    {!!removed.length && <Typography className={classes.customizationRemoved}>Removed: {removed.join(", ")}</Typography>}
                    {!!added.length && <Typography className={classes.customizationAdded}>Added: {added.join(", ")}</Typography>}
                </Grid>
                <Grid item md={3}>
                    <Typography className={classes.productGridItem}>{quantity}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderedProduct;