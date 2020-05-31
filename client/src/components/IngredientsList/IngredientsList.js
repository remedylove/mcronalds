import React from 'react';
import { Container, Grid, Typography, CircularProgress, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
    Typography: {
        fontWeight: 'bold'
    },
    Grid: {
        paddingTop: '2rem'
    },
    ingredientsContainer: {
        background: '#eee',
        padding: '3em 0'
    }
}

const useStyles = makeStyles(styles);

const IngredientsList = ({ title, ingredients }) => {
    
    const classes = useStyles();

    return (
        ingredients
        ? <div className={classes.ingredientsContainer}>
            <Container>
                <Typography className={classes.Typography} variant="h4">Ingredients in the {title}</Typography>
                <Grid className={classes.Grid} container justify="center" spacing={4}>
                    {ingredients.map(ingredient =>  {
                        return(
                            <Grid key={ingredient} item xs={6} sm={4} md={3} lg={2}>
                                <img src={require(`../../assets/ingredients/${ingredient}.png`)} alt="ingredient-img" />
                                <Typography variant="h6">{ingredient}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
        : <CircularProgress color="primary" size={50} />
    )
}

export default IngredientsList;

IngredientsList.propTypes = {
    title: PropTypes.string,
}