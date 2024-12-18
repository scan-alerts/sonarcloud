const assert = require('assert');
const { max, min } = require('./path_to_your_file');

describe('Testing max and min functions', () => {
  it('should return maximum of two numbers', () => {
    assert.strictEqual(max(10, 20), 20);
    assert.strictEqual(max(100, 20), 100);
  });

  it('should return minimum of two numbers', () => {
    assert.strictEqual(min(10, 20), 10);
    assert.strictEqual(min(100, 20), 20);
  });
});