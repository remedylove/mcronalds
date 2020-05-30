const Joi = require('@hapi/joi');

const OrderedProductschema = require('../models/OrderedProduct');

const OrderSchema = Joi.object().keys({
    products: Joi.array().items(OrderedProductschema),
    handled: Joi.boolean().default(false),
    date: Joi.date().default(Date.now)
});

module.exports = OrderSchema;
