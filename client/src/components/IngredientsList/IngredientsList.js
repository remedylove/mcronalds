import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { ProductConsumer } from '../../context';

const IngredientsList = () => {
    return (
        <ProductConsumer>
                {value =>   {
                    const { title, ingredients } = value.detailProduct;
                    return (
                        <div style={{background: '#eee', padding: '50px 0'}}>
                            <Typography variant="h4" style={{fontWeight: 'bold'}}>Ingredients in the {title}</Typography>
                            <Grid container justify="center" style={{paddingTop: '50px'}}>
                                {ingredients.map(ingredient =>  {
                                    return(
                                        <Grid key={ingredient} item xs={6} sm={4} md={3} lg={2}>
                                            <img src={require(`../../assets/ingredients/${ingredient}.png`)} alt="ingredient-img" />
                                            <Typography variant="h6">{ingredient}</Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    )
                }}
        </ProductConsumer>
    )
}

export default IngredientsList;