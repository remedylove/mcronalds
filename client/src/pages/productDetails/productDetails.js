import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import { ProductConsumer } from '../../context';
import SingleProductView from '../../components/SingleProductView/SingleProductView';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

class ProductDetailsPage extends Component {
    constructor(props)  {
        super(props);
        props.handleDetail(this.props.match.params.id)
    }

    render() {
        const { id } = this.props.match.params;
        const { title, description, calories, ingredients } = this.props.detailProduct;
        return (
            <div>
                <Logo />
                {/* <Typography variant="h3" align="left" style={{padding: '25px'}}>Product details</Typography> */}
                <SingleProductView id={id} title={title} description={description} calories={calories} ingredients={ingredients}/>
            </div>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'detailProduct'])(ProductDetailsPage);