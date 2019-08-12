import { expect } from 'chai';

import postSchema  from '../../../schemas/post-schema';

const request = require('supertest');
const URL = 'https://jsonplaceholder.typicode.com/posts'


describe('Post', () => {
    it('Deve criar um recurso', done => {
        request(URL)
            .post('/')
            .send({ title: 'foo', body: 'bar', userId: 1 })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                expect(res.status).to.be.eql(201);
                expect(res.body).to.eql({ title: 'foo', body: 'bar', userId: 1, id: 101 })
                expect(res.body).to.contains({ id: 101, userId: 1 })
                console.log(res.body)

                joiAssert(res.body, postSchema);
                done(err);
            });
    });
});