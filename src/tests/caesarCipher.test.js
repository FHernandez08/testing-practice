const caesarCipher = require('../caesarCipher');

test('The wrapping of the string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('case prevention', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});