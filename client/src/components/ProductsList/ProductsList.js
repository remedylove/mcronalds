import React from 'react';
import { Grid, makeStyles, Fade } from '@material-ui/core';
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
                {products.map((product, index) => (
                    !currentCategory || product.category === currentCategory
                    ?   <Fade key={product.id} in timeout={1000}>
                            <Grid key={product.id} item xs={10} sm={5} md={3}>
                                <ProductCard key={product.id} product={product} onAddition={onAddition} />
                            </ Grid>
                        </Fade>
                    : null
                ))}
            </Grid>
        </div>
    );
}

ProductsList.propTypes = {
    product: PropTypes.object,
    currentCategory: PropTypes.string,
    key: PropTypes.string,
    product: PropTypes.string,
}

export default ProductsList;
