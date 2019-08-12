const postSchema = Joi.object({
    userId: Joi.number().integer().required(),
    id: Joi.number().integer().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),

}).required();

export default postSchema;