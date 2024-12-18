const assert = require('assert');
const mathOperations = require('./mathOperations');

describe('Math operations Test', () => {
  it('addition of 1 and 2 should be 3', () => {
    assert.equal(mathOperations.add(1, 2), 3);
  });

  it('subtraction of 3 and 2 should be 1', () => {
    assert.equal(mathOperations.subtract(3, 2), 1);
  });
});