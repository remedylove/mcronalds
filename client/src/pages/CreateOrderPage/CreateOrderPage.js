import React, { Component } from 'react';
import { Typography, withStyles, CircularProgress } from '@material-ui/core';
import ProductsList from '../../components/ProductsList/ProductsList';
import ChoiceBar from '../../components/ChoiceBar/ChoiceBar';
import { categories } from '../../store';
import Logo from '../../components/Logo/Logo';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

const styles = theme => ({
    Typography: {
        fontFamily: 'Permanent Marker',
        textTransform: 'uppercase',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottom: '1px solid #999'
    }
})

class CreateOrderPage extends Component  {
    constructor(props)   {
        super(props);
        this.state = {
            currentCategory: '',
        }
    }

    handleCategorySelected = currentCategory =>  {
        this.setState({
            currentCategory
        })
    }

    render()    {
        const { currentCategory, cartCounter } = this.state;
        const { classes, products, handleDetail, isReady } = this.props;
        
        return(
            isReady
            ? <div>
                <Logo cartCounter={cartCounter}/>
                <ChoiceBar 
                    categories={categories}
                    currentCategory={this.state.currentCategory}
                    onSelect={this.handleCategorySelected}
                />
                <Typography className={classes.Typography} variant="h4">
                        {currentCategory ? currentCategory : 'all products'}
                </Typography>
                <ProductsList products={products} currentCategory={currentCategory} handleDetail={handleDetail} />
            </div>
            : <>
                <CircularProgress style={{margin: 'auto'}} color="primary" />
                <Typography>Fetching data...</Typography>
              </>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'products', 'cartItems', 'isReady'])(withStyles(styles)(CreateOrderPage));