import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import RelatedProductCard from '../RelatedProductCard/RelatedProductCard';
import PropTypes from 'prop-types';
const styles = {
    Typography: {
        fontWeight: 'bold'
    },
    Grid: {
        paddingTop: '2rem',
        maxWidth: '100%'
    },
    relatedProductsContainer: {
        background: '#fff',
        padding: '3em 0'
    }
}

const useStyles = makeStyles(styles);

const RelatedProducts = ({ products }) => {
    const classes = useStyles();

    return (
        <div className={classes.relatedProductsContainer}>
            <Typography className={classes.Typography} variant="h4">Related Products</Typography>
            <Grid className={classes.Grid} container justify="center" spacing={3}>
                {products.map(product => (
                    <Grid key={product._id} item xs={10} sm={5} md={3}>
                        <RelatedProductCard key={product._id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

RelatedProducts.propTypes = {
    products: PropTypes.array,
    key: PropTypes.string,
    product: PropTypes.object,
}

export default RelatedProducts;
