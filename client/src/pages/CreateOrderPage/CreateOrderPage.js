import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import ProductsList from '../../components/ProductsList/ProductsList';
import { categories } from '../../store';
import Logo from '../../components/Logo/Logo';
import MyAlert from '../../components/MyAlert/MyAlert';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';
import ChoiceBar2 from '../../components/ChoiceBar/ChoiceBar2';

const styles = theme => ({
    Typography: {
        background: '#fff',
        fontFamily: 'Permanent Marker',
        fontWeight: 'bold',
        padding: '.6em 0',
        // borderBottom: '1px solid #999',
        marginTop: '1px',
        // marginBottom: '.75em'
    }
})

class CreateOrderPage extends Component  {
    constructor(props)   {
        super(props);
        this.state = {
            currentCategory: '',
            alertMsg: '',
            alertOpen: false,
            color: ''
        }
    }

    handleCategorySelected = currentCategory =>  {
        this.setState({
            currentCategory
        })
    }

    onAddition = productName => {
        this.setState({alertOpen: true, alertMsg: `${productName} has been added to your cart.`, color: 'primary'});
    }

    onDismiss = () => {
        this.setState({
            alertOpen: false
        });
    }

    render()    {
        const { currentCategory, cartCounter, alertOpen, alertMsg, color } = this.state;
        const { classes, products } = this.props;
        
        return(
            <div>
                <Logo cartCounter={cartCounter}/>
                {/* <ChoiceBar 
                    categories={categories}
                    currentCategory={this.state.currentCategory}
                    onSelect={this.handleCategorySelected}
                /> */}
                <div style={{display: 'flex', width: '100%'}}>
                    <ChoiceBar2 
                        categories={categories}
                        currentCategory={this.state.currentCategory}
                        onSelect={this.handleCategorySelected}
                    />
                    <div style={{minWidth: '300px', maxWidth: '20%',}}></div>
                    <div style={{width: 'inherit'}}>
                        <Typography className={classes.Typography} variant="h2">
                            {currentCategory ? currentCategory : 'Full Menu'}
                        </Typography>
                        <MyAlert isOpen={alertOpen} color={color} toggle={this.onDismiss} alertMsg={alertMsg}/>
                        <ProductsList products={products} currentCategory={currentCategory} onAddition={this.onAddition} />
                    </div>
                </div>
            </div>

        );
    }
}

export default extractProductConsumer(['products', 'cartItems'])(withStyles(styles)(CreateOrderPage));