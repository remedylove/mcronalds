const express = require('express');
const router = express.Router();

const Order = require('../../models/Order');

router.get('/', (req, res) => {
    Order.find()
        .sort({   })
        .then(orders => res.json(orders));
});

router.post('/', (req, res) => {
    console.log(req.body.products);
    const newOrder = new Order({
        products: req.body.products
    });

    newOrder.save().then(order => res.json());
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
