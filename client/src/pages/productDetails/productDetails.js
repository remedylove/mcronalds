import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import Logo from '../../components/Logo/Logo';
import { ProductConsumer } from '../../context';
import { Container, Grid, Typography } from '@material-ui/core';

class ProductDetailsPage extends Component {
    render() {
        return (
            <div>
                <Logo />
                {/* <Typography variant="h3" align="left" style={{padding: '25px'}}>Product details</Typography> */}
                <ProductConsumer>
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
                                <div style={{background: '#eee', padding: '100px 0'}}>
                                    <Typography variant="h4" style={{fontWeight: 'bold'}}>Ingredients in the {title}</Typography>
                                    <Grid container justify="center" style={{padding: '50px 0'}}>
                                        {ingredients.map(ingredient =>  {
                                            return(
                                                <Grid key={ingredient} item xs={5} sm={4} md={3} lg={2}>
                                                    <img src={require(`../../assets/ingredients/${ingredient}.png`)} alt="ingredient-img" />
                                                    <Typography variant="h6">{ingredient}</Typography>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </div>
                          </React.Fragment>
                        );     
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default ProductDetailsPage;