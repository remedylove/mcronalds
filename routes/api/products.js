const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

router.get('/', (req, res) => {
    Product.find()
        .sort({ title: -1 })
        .then(products => res.json(products));
});

router.post('/', (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        calories: req.body.calories,
        ingredients: req.body.ingredients,
        image: req.body.image,
        imageDetails: req.body.imageDetails,
        price: req.body.price,
        category: req.body.category
    });

    newProduct.save().then(product => res.json(product));
});

module.exports = router;