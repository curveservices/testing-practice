const {caesarCipher, shiftChar} = require('../code/caesarCipher');


test('shiftChar shifts a letter correctly', () => {
    expect(shiftChar('a', 1)).toBe('b');
    expect(shiftChar('z', 1)).toBe('a');
    expect(shiftChar('A', 3)).toBe('D');
    expect(shiftChar('B', 3)).toBe('E');
    expect(shiftChar('!', 1)).toBe('!');
    expect(shiftChar('5', 1)).toBe('5');
  });
  
  test('caesarCipher shifts a string correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('zZ', 1)).toBe('aA');
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    expect(caesarCipher('XYZ', -1)).toBe('WXY');
    expect(caesarCipher('AaZz 123 !', 7)).toBe('HhGg 123 !');
    expect(caesarCipher('abcdefg', 26)).toBe('abcdefg'); // Test wrapping
  });
 
  
  
  
