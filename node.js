const assert = require('assert');
const request = require('supertest');
const app = require('./app'); // Assuming that the above code is saved in app.js

describe('GET /login', function () {
    it('respond with success message', function(done) {
        request(app)
        .get('/login?username=admin&password=password123')
        .end(function(err, res) {
            assert.strictEqual(res.text, 'Login successful!');
            done();
        });
    });

    it('respond with failure message', function(done) {
        request(app)
        .get('/login?username=admin&password=fakepassword')
        .end(function(err, res) {
            assert.strictEqual(res.text, 'Invalid credentials!');
            done();
        });
    });
});

describe('GET /greet', function () {
    it('respond with welcome message', function(done) {
        request(app)
        .get('/greet?name=John ')
        .end(function(err, res) {
            assert.strictEqual(res.text, '<h1>Welcome, John!</h1>');
            done();
        });
    });
}); 

describe('POST /deserialize', function () {
    it('respond with deserialized data', function(done) {
        request(app)
        .post('/deserialize')
        .send({ data: JSON.stringify({ foo: "bar" }) })
        .end(function(err, res) {
            assert.strictEqual(res.text, 'Deserialized data: {"foo":"bar"}');
            done();
        });
    });
});

describe('GET /error', function () {
    it('respond with error', function(done) {
        request(app)
        .get('/error')
        .expect(500, done);
    });
});
