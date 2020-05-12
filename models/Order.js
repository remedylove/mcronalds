const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderedProduct = require('../models/OrderedProduct');

const OrderSchema = new Schema({
    products: [OrderedProduct.schema]
});

module.exports = Order = mongoose.model('order', OrderSchema);
