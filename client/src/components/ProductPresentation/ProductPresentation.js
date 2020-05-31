import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    container: {
        width: '80%'
    },
    gridContainer: {
        padding: '7.5em 0'
    },
    productName: {
        fontWeight: 'bold', 
        textTransform: 'capitalize'
    },
    caloriesText: {
        margin: '1em 0'
    },
    productImage: {
        maxWidth: '100%'
    }
});

const ProductPresentation = ({ title, detailProduct }) => {

    const { calories, description } = detailProduct;
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={5}>
                    <Typography variant="h3" align="left" className={classes.productName}>{title}</Typography>
                    <Typography variant="h4" align="left" className={classes.caloriesText}>
                        <CurrencyFormat value={calories} displayType={'text'} sufix={'kcal'}></CurrencyFormat>
                        kcal
                    </Typography>
                    <Typography align="left">{description}</Typography>
                </Grid>
                <Grid item md={7}align="left">
                    <img className={classes.productImage} src={require(`../../assets/${title}-details.jpg`)} alt="details-product-img" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductPresentation;

ProductPresentation.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}