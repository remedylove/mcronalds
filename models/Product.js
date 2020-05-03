const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    calories: {
        type: Number
    },
    ingredients: [String],
    customization: {
        added: [String],
        removed: [String]
    },
    image: {
        type: String
    },
    imageDetails: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);