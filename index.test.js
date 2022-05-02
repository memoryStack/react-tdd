
const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('returns the given number for multiples of neither 3 nor 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(22)).toBe('22');
  });
});

/**
 * Note: 1. we are going to solve "http://wiki.c2.com/?FizzBuzzTest"
 *      using TDD
 * 
 * 2. npx jest --watchAll --coverage --coverageReporters=text
 *      this will run jest in watch mode and will print code coverage
 *      reports as well
 */