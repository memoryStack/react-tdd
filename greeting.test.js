const greeting = guest => `Hello, ${guest}!`;

describe('greeting()', () => { // 1
  it('says hello', () => { // 2
    expect(greeting('Jest')).toBe('Hello, Jest!'); // 3
  });
});

/**
 * Note: a. "greeting()" is a noun
 *       b. "says hello" is a verb
 *  together it becomes "greeting() says hello" and it describes a functionality
 *  tested by this test
 */