import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';

const ProductPresentation = ({ title, calories, description, imageDetails }) => {
    return (
        <Container style={{width: '80%'}}>
            <Grid container style={{padding: '100px 0'}}>
                <Grid item md={5}>
                    <Typography variant="h3" align="left" style={{marginTop: '50px', fontWeight: 'bold'}}>{title}</Typography>
                    <Typography variant="h4" align="left" style={{margin: '20px 0'}}>
                        <CurrencyFormat value={calories} displayType={'text'} sufix={'kcal'}></CurrencyFormat>
                        kcal
                    </Typography>
                    <Typography align="left" style={{marginTop: '25px'}}>{description}</Typography>
                </Grid>
                <Grid item md={7}align="left">
                    <img src={imageDetails} alt="details-product-img" style={{maxWidth: '100%', marginTop: '25px'}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductPresentation;