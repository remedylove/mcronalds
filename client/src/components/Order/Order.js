import React from 'react';
import { Paper, Typography, Grid, IconButton, makeStyles } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import OrderedProduct from '../OrderedProduct/OrderedProduct';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    paperOrder: {
        width: '50%', 
        margin: '1em auto 1em', 
        paddingBottom: '2.25em',
        borderRadius: 20
    },
    orderNumber: {
        fontFamily: 'Permanent Marker',
        // color: '#3f50b5',
        color: '#000',
        padding: '.75em 1em', 
    },
    tableGridContainer: {
        padding: '0 2.5em'
    },
    tableGridItem: {
        fontFamily: 'Permanent Marker',
        fontSize: '1.5rem',
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
        fontFamily: 'Permanent Marker',
        // fontSize: '.75rem', 
        fontWeight: 'bold', 
        // color: '#707070',
        marginBottom: '1em'
    },
    iconsWrapper: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        padding: '0 4em',
    },
    doneIcon: {
        background: 'green',
        color: '#fff',
        // border: '1px solid green',
        padding: '.5em',
        margin: '0 .25em',
        '&:hover':    {
            background: 'green',
            color: '#fff'
        }
    },
    clearIcon: {
        background: 'red',
        color: '#fff',
        // border: '1px solid red',
        padding: '.5em',
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
                <Typography variant="h3" align="left" className={classes.orderNumber}>Order #{index}</Typography>
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

Order.propTypes = {
    order: PropTypes.object, 
    handleOrder: PropTypes.func, 
    cancelOrder: PropTypes.func
}

export default Order;