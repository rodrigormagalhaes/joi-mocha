import Joi from 'joi';

const schemaUser = Joi.object({
    login: Joi.string().required(),
    id: Joi.number().integer(),
    node_id: Joi.string().required(),
    avatar_url: Joi.string().required(),
    gravatar_id: Joi.string().allow(''),
    url: Joi.string().required(),
    html_url: Joi.string().required(),
    followers_url: Joi.string().required(),
    following_url: Joi.string().required(),
    gists_url: Joi.string().required(),
    starred_url: Joi.string().required(),
    subscriptions_url: Joi.string().required(),
    organizations_url: Joi.string().required(),
    repos_url: Joi.string().required(),
    events_url: Joi.string().required(),
    name: Joi.string().required(),
    received_events_url: Joi.string().required(),
    type: Joi.string().required(),
    site_admin: Joi.boolean().required(),
    company: Joi.string().allow(null),
    blog: Joi.string().allow(''),
    location: Joi.string().allow(null),
    email: Joi.string().allow(null),
    hireable: Joi.boolean().allow(null),
    bio: Joi.string().allow(null),
    public_repos: Joi.number().required(),
    public_gists: Joi.number().required(),
    followers: Joi.number().required(),
    following: Joi.number().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()

}).required();

export default schemaUser;