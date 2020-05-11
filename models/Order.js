const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../models/Product'); // TODO: change into some kind of wrapper

const OrderSchema = new Schema({
    products: [Product.schema]
});

module.exports = Order = mongoose.model('order', OrderSchema);