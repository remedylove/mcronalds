import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import SingleProductView from '../../components/SingleProductView/SingleProductView';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

class ProductDetailsPage extends Component {
    constructor(props)  {
        super(props);
        props.handleDetail(this.props.match.params.id)
    }

    render() {
        const { id } = this.props.match.params;
        const { categoryProducts } = this.props;
        const { title, description, calories, ingredients, imageDetails } = this.props.detailProduct;
        return (
            <div>
                <Logo />
                <SingleProductView id={id} title={title} description={description} calories={calories} ingredients={ingredients} imageDetails={imageDetails}/>
                <RelatedProducts products={categoryProducts}/>
            </div>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'detailProduct', 'categoryProducts'])(ProductDetailsPage);