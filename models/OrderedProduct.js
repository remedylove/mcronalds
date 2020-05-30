const Joi = require('@hapi/joi');

const OrderedProductSchema = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    customization: Joi.object().keys({
        added: Joi.array().items(Joi.string()),
        removed: Joi.array().items(Joi.string())
    }),
    price: Joi.number().required(),
    quantity: Joi.number().required()
});

module.exports = OrderedProductSchema;
