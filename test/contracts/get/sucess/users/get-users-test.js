import schemaUser from './schema-user';

describe('Get Users', function () {
    it('Validar response conforme definido no schemaUser', function (done) {
        request
            .get("users/rodrigormagalhaes")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                joiAssert(res.body, schemaUser);
                done(err);
            })
    });
});