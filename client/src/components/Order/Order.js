import React from 'react';
import { Paper, Typography, Grid, IconButton, makeStyles } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const useStyles = makeStyles({
    paperOrder: {
        width: '50%', 
        margin: '1em auto 1em', 
        paddingBottom: '2.5em'
    },
    orderNumber: {
        fontFamily: 'Permanent Marker',
        color: '#fff',
        background: '#0275d8',
        padding: '.25em 1em', 
    },
    tableGridContainer: {
        padding: '2.5em 2.5em 0'
    },
    tableGridItem: {
        fontWeight: 'bold'
    },
    actionsWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2em'
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em'
    },
    actionsHeaderText: {
        fontSize: '.75rem', 
        fontWeight: 'bold', 
        color: '#707070',
        marginBottom: '1em'
    },
    iconsWrapper: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        padding: '0 4em',
    },
    doneIcon: {
        color: 'green',
        border: '1px solid green',
        padding: '8px',
        margin: '0 .25em',
        '&:hover':    {
            background: 'green',
            color: '#fff'
        }
    },
    clearIcon: {
        color: 'red',
        border: '1px solid red',
        padding: '8px',
        margin: '0 .25em',
        '&:hover':    {
            background: 'red',
            color: '#fff'
        }
    }
})

const Order = ({ index, order, handleOrder, cancelOrder }) => {

    const { _id, products } = order;
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paperOrder}>
                <Typography align="left" className={classes.orderNumber}>Order #{index}</Typography>
                <Grid className={classes.tableGridContainer} container>
                    <Grid item md={3}>
                        <Typography className={classes.tableGridItem}>Product</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography className={classes.tableGridItem}>Customization</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.tableGridItem}>Quantity</Typography>
                    </Grid>
                </Grid>
                {products.map(({ _id, title, customization, quantity }) => {
                    const { removed, added } = customization;
                    return (
                        <OrderedProduct key={_id} title={title} removed={removed} added={added} quantity={quantity} />
                    );
                })}
                    <div className={classes.actionsContainer}>
                        <Typography className={classes.actionsHeaderText} variant="body2">ACTIONS</Typography>
                        <div className={classes.iconsWrapper}>
                            <IconButton className={classes.doneIcon} onClick={e => handleOrder(_id)}>
                                <DoneIcon fontSize="small" />
                            </IconButton>
                            <IconButton className={classes.clearIcon} onClick={e => cancelOrder(_id)}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </div>
                    </div>
            </Paper>
        </div>
    );
}

export default Order;