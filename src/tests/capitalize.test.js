const capitalize = require('../capitalize');

test('To determine if the string is capitalized', () => {
    expect(capitalize('apples')).toBe('Apples');
    expect(capitalize('hello')).toBe('Hello');
})