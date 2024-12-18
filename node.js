const assert = require('assert');
const supertest = require('supertest');

const request = supertest(app);

describe('Test Cases', () => {
    it('should login successfully', async () => {
        const res = await request.get('/login').query({ username: 'admin', password: 'password123' });
        assert.strictEqual(res.text, 'Login successful!');
    });

    it('should deny login with invalid credentials', async () => {
        const res = await request.get('/login').query({ username: 'invalid', password: 'invalid' });
        assert.strictEqual(res.text, 'Invalid credentials!');
    });

    it('should greet user', async () => {
        const res = await request.get('/greet').query({ name: 'John' });
        assert.strictEqual(res.text, '<h1>Welcome, John!</h1>');
    });

    it('should greet Guest when name is not provided', async () => {
        const res = await request.get('/greet');
        assert.strictEqual(res.text, '<h1>Welcome, Guest!</h1>');
    });

    it('should deserialize data', async () => {
        const res = await request.post('/deserialize').send({ data: JSON.stringify({ key: 'value' }) });
        assert.strictEqual(res.text, 'Deserialized data: {"key":"value"}');
    });

    it('should handle error', async () => {
        const res = await request.get('/error');
        assert.strictEqual(res.status, 500);
        assert.isTrue(res.text.startsWith('Error: Something went wrong!'));
    });
});