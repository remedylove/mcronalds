const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Product title required']
    },
    description: {
        type: String,
        required: [true, 'Product description required']
    },
    calories: {
        type: Number,
        required: [true, 'Product calories value required']
    },
    ingredients: [String],
    customization: {
        added: [String],
        removed: [String]
    },
    imageSrc: {
        type: String,
        required: [true, 'Product image required']
    },
    detailsImageSrc: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Product price required']
    },
    category: {
        type: String,
        required: [true, 'Product have to be added to category']
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);