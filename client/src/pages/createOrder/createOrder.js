import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import ProductsList from '../../components/ProductsList/ProductsList';
import ChoiceBar from '../../components/ChoiceBar/ChoiceBar';
import { categories } from '../../store';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

import Logo from '../../components/Logo/Logo';

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
            cartCounter: 0
        }
    }

    handleCategorySelected = currentCategory =>  {
        this.setState({
            currentCategory
        })
    }

    handleClick = () =>  {
        this.setState(prevState => {
            return {
                cartCounter: prevState.cartCounter + 1 
            }
        })
    }

    render()    {
        const { currentCategory, cartCounter } = this.state;
        const { classes, products, handleDetail } = this.props;
        
        return(
            <div>
                <Logo cartCounter={cartCounter}/>
                <ChoiceBar 
                    categories={categories}
                    currentCategory={this.state.currentCategory}
                    onSelect={this.handleCategorySelected}
                />
                <Typography className={classes.Typography} variant="h4">
                        {currentCategory ? currentCategory : 'all products'}
                </Typography>
                <ProductsList products={products} currentCategory={currentCategory} handleDetail={handleDetail}/>
            </div>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'products'])(withStyles(styles)(CreateOrderPage));