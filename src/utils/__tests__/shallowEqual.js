import shallowEqual from '../shallowEqual';

test('true when both objects are empty', () => {
  const result = shallowEqual({}, {});

  expect(result).toBe(true);
});

test('true when both objects are referentially equal', () => {
  const obj = { a: 1, b: 2 };

  const result = shallowEqual(obj, obj);

  expect(result).toBe(true);
});

test('true when all values are the same', () => {
  const result = shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 });

  expect(result).toBe(true);
});

test('true when values are referentially equal', () => {
  const nestedObj = { a: 1 };

  const result = shallowEqual({ key: nestedObj }, { key: nestedObj });

  expect(result).toBe(true);
});

test('false when values are not shallow', () => {
  const result = shallowEqual({ a: {} }, { a: {} });

  expect(result).toBe(false);
});

test('false when one value has too many keys', () => {
  const result = shallowEqual({ a: 1 }, { a: 1, b: 2 });

  expect(result).toBe(false);
});

test('false when value is undefined but key is not present in second object', () => {
  const result = shallowEqual({ a: undefined }, {});

  expect(result).toBe(false);
});

test('true when all array items are equal', () => {
  const result = shallowEqual([1, 2], [1, 2]);

  expect(result).toBe(true);
});

test('false when array length differs', () => {
  const result = shallowEqual([1], [1, 2]);

  expect(result).toBe(false);
});

test('true when both values are null', () => {
  const result = shallowEqual(null, null);

  expect(result).toBe(true);
});

test('true when both values are undefined', () => {
  const result = shallowEqual(undefined, undefined);

  expect(result).toBe(true);
});

test('false when one of the values is null', () => {
  const result = shallowEqual({}, null);

  expect(result).toBe(false);
});

test('false when one of the values is undefined', () => {
  const result = shallowEqual({}, undefined);

  expect(result).toBe(false);
});

test('true when values are not objects and are equal', () => {
  const result = shallowEqual(1, 1);

  expect(result).toBe(true);
});

test('false when values are not objects and are not equal', () => {
  const result = shallowEqual(1, 2);

  expect(result).toBe(false);
});

test('false when one value is not an object', () => {
  const result = shallowEqual({}, 2);

  expect(result).toBe(false);
});
