import joiAssert from 'joi-assert';
import Joi from 'joi';
import supertest from 'supertest';

global.Joi = Joi;
global.joiAssert = joiAssert;
global.request = supertest("https://api.github.com/");