const reverseString = require('../code/reverseString')

test('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh')
});