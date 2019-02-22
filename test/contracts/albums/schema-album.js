import Joi from 'joi';

let properties = {
    userId: Joi.number().integer().required(),
    id: Joi.number().integer().required(),
    title: Joi.string().required()
}

export const schemaAlbum = Joi.object(
    properties

).required();

export const schemaAlbumsList = Joi.array().items(Joi.object().keys(
    properties

)).required();