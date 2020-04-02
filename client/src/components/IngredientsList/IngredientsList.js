import React from 'react';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

const IngredientsList = ({ title, ingredients }) => {
    console.log(ingredients);
    return (
        ingredients
        ? <div style={{background: '#eee', padding: '50px 0'}}>
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
        : <CircularProgress color="primary" size={50} />
    )
}

export default IngredientsList;