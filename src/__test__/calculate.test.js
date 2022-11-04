import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Test Suit For Calculations', () => {
  test('Test For Addition Of Two Numbers', () => {
    const inputObj = { total: 4, next: 2, operation: '+' };
    const ExpectObj = { next: null, operation: null, total: '6' };
    expect(calculate(inputObj, '=')).toEqual(ExpectObj);
  });

  test('Test For Subtration Of Two Numbers', () => {
    const inputObj = { total: 4, next: 2, operation: '-' };
    const ExpectObj = { next: null, operation: null, total: '2' };
    expect(calculate(inputObj, '=')).toEqual(ExpectObj);
  });

  test('Test For Multiplication Of Two Numbers', () => {
    const inputObj = { total: 4, next: 2, operation: 'x' };
    const ExpectObj = { next: null, operation: null, total: '8' };
    expect(calculate(inputObj, '=')).toEqual(ExpectObj);
  });

  test('Test For Division Of Two Numbers', () => {
    const inputObj = { total: 4, next: 2, operation: '÷' };
    const ExpectObj = { next: null, operation: null, total: '2' };
    expect(calculate(inputObj, '=')).toEqual(ExpectObj);
  });
});
