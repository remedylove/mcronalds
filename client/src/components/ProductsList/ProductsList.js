import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';
const styles = {
    Container : {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        width: '90%'
    },
    GridContainer:  {
        marginLeft: 0,
        marginTop: '.75em',
        maxWidth: '100%'
    }
}

const useStyles = makeStyles(styles);

const ProductsList = ({ products, currentCategory, onAddition }) => {
    const classes = useStyles();

    return (
        <div className={classes.Container}>
            <Grid className={classes.GridContainer} container justify="center" spacing={3}>
                {products.map(product => (
                    !currentCategory || product.category === currentCategory
                    ?   <Grid key={product.id} item xs={10} sm={5} md={3}>
                            <ProductCard key={product.id} product={product} onAddition={onAddition} />
                        </ Grid>
                    : null
                ))}
            </Grid>
        </div>
    );
}

ProductsList.propTypes = {
    key: PropTypes.string,
    product: PropTypes.string,
}

export default ProductsList;
