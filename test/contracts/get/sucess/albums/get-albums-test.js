import joiAssert from 'joi-assert'
import { expect } from 'chai';

import * as schemas  from './schema-album';

const request = require('supertest');

const URL = 'https://jsonplaceholder.typicode.com/'


describe('Get Albums', () => {
    it('Deve retornar um album conforme schemaAlbum', done => {
        request(URL)
            .get('albums/1')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                expect(res.status).to.be.eql(200);
                joiAssert(res.body, schemas.schemaAlbum);
                done(err);
            })
    });

    it('Deve retornar uma lista de albums', done => {
        request(URL)
            .get('albums')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                expect(res.status). to.be.eql(200);
                joiAssert(res.body, schemas.schemaAlbumsList);
                done(err);
            })

    });
});