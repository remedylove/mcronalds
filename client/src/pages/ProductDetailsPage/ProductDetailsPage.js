import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import SingleProductView from '../../components/SingleProductView/SingleProductView';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import extractProductConsumer from '../../components/ExtractProductConsumer/ExtractProductConsumer';

class ProductDetailsPage extends Component {
    constructor(props)  {
        super(props);
        props.handleDetail(this.props.match.params.title)
    }

    render() {
        const { title } = this.props.match.params;
        const { categoryProducts, detailProduct } = this.props;
        const { description, calories, ingredients, imageDetails } = detailProduct;
        return (
            <div>
                <Logo />
                {/* <SingleProductView title={title} description={description} calories={calories} ingredients={ingredients} imageDetails={imageDetails}/> */}
                <SingleProductView title={title} detailProduct={detailProduct} />
                <RelatedProducts products={categoryProducts}/>
            </div>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'detailProduct', 'categoryProducts'])(ProductDetailsPage);