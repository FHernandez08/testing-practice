const reverseString = require('../reverseString');

test('checking if the string is reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
})