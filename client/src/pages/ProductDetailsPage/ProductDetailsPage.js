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

    componentDidUpdate() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    render() {
        const { title } = this.props.match.params;
        const { categoryProducts, detailProduct } = this.props;
        return (
            <div>
                <Logo />
                <SingleProductView title={title} detailProduct={detailProduct} />
                <RelatedProducts products={categoryProducts}/>
            </div>
        );
    }
}

export default extractProductConsumer(['handleDetail', 'detailProduct', 'categoryProducts'])(ProductDetailsPage);