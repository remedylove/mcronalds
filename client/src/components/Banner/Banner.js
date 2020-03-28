import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    container: {
        background: 'lightgray'
    },
    title: {
        fontFamily: 'Permanent Marker !important',
        color: 'secondary',
        padding: 0,
        'margin-bottom' : 0
    },
    subtitle: {
        fontFamily: 'Permanent Marker !important',
        color: '#0275d8',
        fontSize: '2rem',
        padding: 0,
        margin: 0,
    },
}

const useStyles = makeStyles(styles);

const Banner = () =>    {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography className={classes.title} variant="h1" align="center" >McRonald's</Typography>
            {/* <h3 className={classes.subtitle}>satisfy your hunger.</h3> */}
            <Typography className={classes.subtitle} variant="h4" align="center" color="primary">satisfy your hunger.</Typography>
        </div>
    );
}

export default Banner;