const Joi = require('@hapi/joi');

const ProductSchema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    calories: Joi.number().required(),
    ingredients: Joi.array().items(Joi.string()),
    customization: Joi.object().keys({
        added: Joi.array().items(Joi.string()),
        removed: Joi.array().items(Joi.string())
    }),
    imageSrc: Joi.string().required(),
    detailsImageSrc: Joi.string(),
    price: Joi.number().required(),
    category: Joi.string().required()
});

module.exports = ProductSchema;
