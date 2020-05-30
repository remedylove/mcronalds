const express = require('express');
const router = express.Router();
const middleware = require('../../middleware');
const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);

const OrderSchema = require('../../models/Order');

let mongooseOrderSchema = new mongoose.Schema(joigoose.convert(OrderSchema));
Order = mongoose.model("Order", mongooseOrderSchema);

router.get('/', (req, res) => {
    Order.find()
        .sort({   })
        .then(orders => res.json(orders));
});

router.post('/', middleware(OrderSchema), (req, res, next) => {
    console.log(req.body.products);
    const order = new Order({
        products: req.body.products
    });

    order.save().then(order => res.json(order));
});

router.put('/:id', (req,res) => {

    const handledOrder = {
        handled: req.body.handled
    }

    Order.findByIdAndUpdate(
        req.params.id,
        handledOrder,
        (err) =>   {
            if (err)    {
                res.json({
                    sucess: false
                })
            }
        }
        ).then(handledOrder => res.json(handledOrder));
});

router.delete('/:id', (req,res) => {
    Order.findById(req.params.id)
    .then(order => order.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
