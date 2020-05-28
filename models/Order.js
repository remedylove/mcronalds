const Joi = require('@hapi/joi');

const OrderedProductschema = require('../models/OrderedProduct');

const OrderSchema = Joi.object().keys({
    products: Joi.array().items(OrderedProductschema)
});

module.exports = OrderSchema;
