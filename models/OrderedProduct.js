const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../models/Product');

const OrderedProductSchema = new Schema({
    product: Product.schema,
    amount: Number
});

module.exports = OrderedProduct = mongoose.model('orderedProduct', OrderedProductSchema);
