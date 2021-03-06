import React from 'react';
import { CircularProgress, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    loaderWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
      height: '80vh', 
      width: '100%', 
    },
    loaderText: {
        fontFamily: 'Permanent Marker',
        marginTop: '1em'
    }
});

const Loader = () => {

    const classes = useStyles();

    return (
        <div className={classes.loaderWrapper}>
            <CircularProgress />
            <Typography className={classes.loaderText}>Loading...</Typography>
        </div>
    )
}

export default Loader;