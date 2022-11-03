import operate from '../logic/operate';

describe('Test Suit For Math Operations', () => {
  test('Test For Addition Of Two Numbers', () => {
    expect(operate(4,2,'+')).toEqual('4');
  });

  test('Test For Subtraction Of Two Numbers', () => {
    expect(operate(4,2,'-')).toEqual('2');
  });

  test('Test For Multiplication Of Two Numbers', () => {
    expect(operate(4,2,'x')).toEqual('8');
  });

  test('Test For Division Of Two Numbers', () => {
    expect(operate(4,2,'÷')).toEqual('2');
  });
});
