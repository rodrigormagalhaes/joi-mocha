import joiAssert from 'joi-assert';

import schemaUser from './schema-user';

const request = require('supertest');

const URL = 'https://api.github.com/users/';
const PATH = 'rodrigormagalhaes'

describe('Get Users', function () {
    it('Validar response conforme definido no schemaUser', function (done) {
        request(URL)
            .get(PATH)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                joiAssert(res.body, schemaUser);
                done(err);
            })
    });
});