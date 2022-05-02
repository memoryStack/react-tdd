const palindromes = require('./plaindromes')

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']); //1
  });
});
