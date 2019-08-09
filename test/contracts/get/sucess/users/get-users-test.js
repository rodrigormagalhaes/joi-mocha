import userSchema from '../../../../schemas/user-schema';

describe('Get Users', function () {
    it('Validar response conforme definido no userSchema', function (done) {
        request
            .get("users/rodrigormagalhaes")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                joiAssert(res.body, userSchema);
                done(err);
            })
    });
});