import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import Logo from '../../components/Logo/Logo';
import ChoiceBar2 from '../../components/ChoiceBar/ChoiceBar2';
import { ProductConsumer } from '../../context';
import { Container, Grid, Typography } from '@material-ui/core';
import IngredientsList from '../../components/IngredientsList/IngredientsList';

class ProductDetailsPage extends Component {
    render() {
        return (
            <div>
                <Logo />
                <ProductConsumer>
                {/* <Typography variant="h3" align="left" style={{padding: '25px'}}>Product details</Typography> */}
                    {value =>   {
                        const { id, title, description, calories, ingredients } = value.detailProduct;
                        return (
                          <React.Fragment>
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
                                            <img src={require(`../../assets/${id}-details.jpg`)} alt="details-product-img" style={{maxWidth: '100%', marginTop: '25px'}}/>
                                        </Grid>
                                    </Grid>
                                </Container>
                                <IngredientsList />
                          </React.Fragment>
                        );     
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default ProductDetailsPage;