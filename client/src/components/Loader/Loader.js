import React from 'react';
import { CircularProgress, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    loaderWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
      height: '100vh', 
      width: '100%', 
    }
});

const Loader = () => {

    const classes = useStyles();

    return (
        <div className={classes.loaderWrapper}>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </div>
    )
}

export default Loader;