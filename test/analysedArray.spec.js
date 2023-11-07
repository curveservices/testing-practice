const analyseArray = require('../code/analysedArray');

describe('analyseArray function', () => {
  test('should analyse the array [1, 8, 3, 4, 2, 6]', () => {
    const result = analyseArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('should analyse the array [10, 20, 30]', () => {
    const result = analyseArray([10, 20, 30]);
    expect(result).toEqual({
      average: 20,
      min: 10,
      max: 30,
      length: 3,
    });
  });

  test('should analyse the array [0, 0, 0, 0, 0]', () => {
    const result = analyseArray([0, 0, 0, 0, 0]);
    expect(result).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 5,
    });
  });

  test('should throw an error for an empty array', () => {
    expect(() => analyseArray([])).toThrow("Input must be a non-empty array of numbers");
  });

  test('should throw an error for a non-array input', () => {
    expect(() => analyseArray("not_an_array")).toThrow("Input must be a non-empty array of numbers");
  });
});