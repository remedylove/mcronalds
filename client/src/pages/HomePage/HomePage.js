import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../../components/Banner/Banner';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    button: {
        fontFamily: 'Permanent Marker',
        color: 'white',
    }
});

const HomePage = () =>  {
    const classes = useStyles();

    return(
        <div className="homePage">
            <img className="burgerLogo" src={require("./burger.webp")} alt="burger"/>
            <div className="logoSection">
                <Banner />
            </div>
            <Link className="link" to="/create-order">
                <Button className={classes.button} variant="contained" color="primary" size="large" margin="normal">Make an order</Button>
            </Link>
        </div>
    );
}

export default HomePage;