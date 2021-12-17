const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().min(1).required(),
    main_img: Joi.string().min(5).required(),
    description: Joi.string().min(15).required(),
    region: Joi.string().min(5).required(),
    slug: Joi.string(),
    adress: Joi.string(),
    email: Joi.string().email(),
    phone_number: Joi.number().integer(),
    user_id: Joi.number().integer().required()
});

module.exports = schema; 