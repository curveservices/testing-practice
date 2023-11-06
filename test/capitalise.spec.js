const capitalise = require('../code/capitalise')

test('should capitalise the first character', () => {
    expect(capitalise('hello world')).toBe('Hello world')
})