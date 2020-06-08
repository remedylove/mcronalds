import React from 'react';
import { Alert } from 'reactstrap';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    alert: {
        // width: '100%',
        margin: '0 .25em',
        fontWeight: 'bold',
    }
})

const MyAlert = ({ isOpen, color, toggle, alertMsg }) => {

    const classes = useStyles();

    return(
        <Alert className={classes.alert} isOpen={isOpen} color={color} toggle={toggle}>{alertMsg}</Alert>
    )
}

export default MyAlert;