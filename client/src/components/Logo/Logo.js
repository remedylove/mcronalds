import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../Cart/Cart';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    outerContainer: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '3px',
        background: 'white',
        boxShadow: '0 0  3px 1px #ccc',
        opacity: .9,
        zIndex: 99
    },
    innerContainer: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    rowDirection: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
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
        padding: 0,
        margin: 0,
    },
    Socials: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50
    },
    SocialsText: {
        fontFamily: 'Permanent Marker !important',
        color: 'black',
        marginRight: 10,
        paddingBottom: 0
    },
    logoLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    // cartContainer: {
    //     paddingLeft: 10,
    //     borderRadius: 10,
    //     background: '#e0e0e0'
    // },
    '@media only screen and (max-width: 600px)': {
        outerContainer: {
            justifyContent: 'center'
        },
        Socials:   {
            display: 'none'
        }
    }
}

const useStyles = makeStyles(styles);

const Logo = () =>    {
    const classes = useStyles();

    return(
        <div className={classes.outerContainer}>
            <div className={classes.innerContainer}>
                <Link className={classes.logoLink} to='/create-order'>
                    <Typography className={classes.title} variant="h4" align="left" >McRonald's</Typography>
                    <Typography className={classes.subtitle} variant="h6" align="left">satisfy your hunger.</Typography>
                </Link>
            </div>
            <div className={classes.rowDirection}>
                <div className={classes.Socials}>
                    {/* <IconButton style={{color: "#3b5998"}}>
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                    <IconButton style={{color: "#b71ad3"}}>
                        <InstagramIcon fontSize="small" />
                    </IconButton>
                    <IconButton style={{color: "red"}}>
                        <YouTubeIcon fontSize="small" />
                    </IconButton>
                    <IconButton style={{color: "#1da1f2"}}>
                        <TwitterIcon fontSize="small" />
                    </IconButton> */}
                    <Cart />
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={5} color="primary">
                            <ShoppingCartIcon fontSize="large" style={{color: 'gray'}}/>
                        </Badge>
                    </IconButton> */}
                    {/* <IconButton>
                        {}
                        <ShoppingCartIcon fontSize="large" style={{color: 'gray'}}/>
                    </IconButton> */}
                </div>
            </div>
        </div>
    );
}

Logo.propTypes = {
    cartCounter: PropTypes.number
}

export default Logo;