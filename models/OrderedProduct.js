const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderedProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Product title required']
    },
    customization: {
        added: [String],
        removed: [String]
    },
    price: {
        type: Number,
        required: [true, 'Product price required']
    },
    quantity:   {
        type: Number,
        required: [true, 'Product quantity required']
    },
});

module.exports = OrderedProduct = mongoose.model('orderedProduct', OrderedProductSchema);
