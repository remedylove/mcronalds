const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderedProduct = require('../models/OrderedProduct');

const OrderSchema = new Schema({
    products: [OrderedProduct.schema],
    handled:    {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Order = mongoose.model('order', OrderSchema);
