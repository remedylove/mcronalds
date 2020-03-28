import React from 'react';
import { products } from '../../store';
import { Grid, makeStyles } from '@material-ui/core';
import ProductCard from '../ProductCard/ProductCard';

const styles = {
    Container : {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        width: '90%'
    },
    GridContainer:  {
        marginLeft: 0,
        marginTop: 0,
        maxWidth: '100%'
    }
}

const useStyles = makeStyles(styles);

const ProductsList = ({ currentCategory }) => {
    const classes = useStyles();

    return (
        <div className={classes.Container}>
            <Grid className={classes.GridContainer} container justify="center" spacing={2}>
                {products.map(product =>  (
                    !currentCategory || product.category === currentCategory
                    ?   <Grid item xs={10} sm={5} md={3} justify="center">
                            <ProductCard key={product.id} product={product} />
                        </ Grid>
                    : null
                ))}
            </Grid>
        </div>
    );
}

export default ProductsList;