import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh'
    },
    mainText: {
        fontFamily: 'Permanent Marker',
        fontSize: '10rem',
        fontWeight: 'bold',
        color: '#3f50b5'
    },
    secondaryText: {
        fontFamily: 'Permanent Marker',
        fontWeight: 'bold',
        fontSize: '7.5rem'
    }
})

const Error404Page = () =>  {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.mainText} variant="h1">404</Typography>
            <Typography className={classes.secondaryText} variant="h4">Page Not Found</Typography>
        </div>
    )
}

export default Error404Page;