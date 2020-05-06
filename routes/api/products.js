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
        imageSrc: req.body.imageSrc,
        detailsImageSrc: req.body.detailsImageSrc,
        price: req.body.price,
        category: req.body.category
    });

    newProduct.save().then(product => res.json(product));
});

router.delete('/:id', (req,res) => {
    Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;