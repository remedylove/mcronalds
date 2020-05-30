import React from 'react';
import { Typography, Badge, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navbarContainer: {
        marginBottom: '3px',
        background: 'white',
        boxShadow: '0 0  3px 1px #ccc',
        padding: '1em 0',
        width: '100%'
    },
    title: {
        fontFamily: 'Permanent Marker',
        color: 'secondary',
        padding: 0,
        marginBottom : 0
    },
    subtitle: {
        fontFamily: 'Permanent Marker',
        color: '#0275d8',
        padding: 0,
        margin: 0,
    },
})

const StaffNavbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.navbarContainer}>
            <Badge badgeContent={<Typography style={{fontFamily: 'Permanent Marker', color: 'orange'}}>For staff</Typography>}>
                <Typography className={classes.title} variant="h4" >McRonald's</Typography>
            </Badge>
                <Typography className={classes.subtitle} variant="h6">satisfy your hunger.</Typography>
        </div>
    )
}

export default StaffNavbar
