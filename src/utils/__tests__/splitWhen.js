import splitWhen from '../splitWhen';

test('splits the list into 2 chunks where the predicate is true', () => {
  const list = [1, 2, 3, 4, 5];

  const result = splitWhen(list, (num) => num === 3);

  expect(result).toEqual([
    [1, 2],
    [3, 4, 5],
  ]);
});

test('returns empty list if there are no items', () => {
  const list = [];

  const result = splitWhen(list, () => true);

  expect(result).toEqual([]);
});

test('handles list where no items satisfy the predicate', () => {
  const list = [1, 2, 3];

  const result = splitWhen(list, (num) => num === 10);

  expect(result).toEqual([[1, 2, 3], []]);
});
