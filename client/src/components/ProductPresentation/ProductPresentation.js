import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';
import extractProductConsumer from '../ExtractProductConsumer/ExtractProductConsumer';

const useStyles = makeStyles({
    container: {
        width: '80%'
    },
    gridContainer: {
        padding: '7.5em 0'
    },
    productName: {
        fontFamily: 'Permanent Marker',
        fontWeight: 'bold', 
        textTransform: 'capitalize'
    },
    caloriesText: {
        fontFamily: 'Permanent Marker',
        color: '#3f50b5',
        margin: '1em 0'
    },
    productImage: {
        maxWidth: '100%'
    }
});

const ProductPresentation = ({ detailProduct }) => {

    const { title, calories, description, detailsImageSrc } = detailProduct;
    const classes = useStyles();

    console.log(detailProduct);

    return (
        <Container className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={5}>
                    <Typography variant="h2" align="left" className={classes.productName}>{title}</Typography>
                    <Typography variant="h4" align="left" className={classes.caloriesText}>
                        <CurrencyFormat value={calories} displayType={'text'} sufix={'kcal'}></CurrencyFormat>
                        kcal
                    </Typography>
                    <Typography style={{fontFamily: 'Permanent Marker'}} align="left">{description}</Typography>
                </Grid>
                <Grid item md={7}align="left">
                    <img className={classes.productImage} src={process.env.PUBLIC_URL + detailsImageSrc} />
                </Grid>
            </Grid>
        </Container>
    );
}
ProductPresentation.propTypes = {
    detailProduct: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    calories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default extractProductConsumer(['detailProduct'])(ProductPresentation);