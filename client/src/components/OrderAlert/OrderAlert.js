import React from 'react';
import { Alert } from 'reactstrap';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    alert: {
        width: '50%', 
        fontWeight: 'bold',
        margin: '0 auto'
    }
})

const OrderAlert = ({ isOpen, color, toggle, alertMsg }) => {

    const classes = useStyles();

    return(
        <Alert className={classes.alert} isOpen={isOpen} color={color} toggle={toggle}>{alertMsg}</Alert>
    )
}

export default OrderAlert;