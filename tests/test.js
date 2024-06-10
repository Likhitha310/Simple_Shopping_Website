// tests/example.test.js

const { add } = require('../example'); // Assuming you have an example module

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
