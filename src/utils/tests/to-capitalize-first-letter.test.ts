import toCapitalizeFirstLetter from '../to-capitalize-first-letter';

describe('toCapitalizeFirstLetter', () => {
  test('Fn expect one argument "string", should be return "String"', () => {
    const result = toCapitalizeFirstLetter('string');
    expect(result).toBe('String');
  });

  test('Fn expect one argument "String", should be return "String"', () => {
    const result = toCapitalizeFirstLetter('String');
    expect(result).toBe('String');
  });

  test('Fn expect one argument "1string", should be return "1string"', () => {
    const result = toCapitalizeFirstLetter('1string');
    expect(result).toBe('1string');
  });

  test('Fn expect one argument " string", should be return " string"', () => {
    const result = toCapitalizeFirstLetter(' stRIng');
    expect(result).toBe('String');
  });
});
