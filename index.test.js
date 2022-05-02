
const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });
});

/**
 * Note: we are going to solve "http://wiki.c2.com/?FizzBuzzTest"
 *      using TDD
 */