import splitUsing from '../splitUsing';

test('splits the list into chunks at the indexes where the predicate is true', () => {
  const list = [1, 2, 3, 2, 5, 5];

  const result = splitUsing(list, (num) => num === 2);

  expect(result).toEqual([
    [1, 2],
    [3, 2],
    [5, 5],
  ]);
});

test('returns empty list if there are no items', () => {
  const list = [];

  const result = splitUsing(list, () => true);

  expect(result).toEqual([]);
});

test('handles list where no items satisfy the predicate', () => {
  const list = [0, 1, 2, 3];

  const result = splitUsing(list, (num) => num === 10);

  expect(result).toEqual([[0, 1, 2, 3]]);
});

test('handles list where all items satisfy the predicate', () => {
  const list = [0, 0, 0, 0];

  const result = splitUsing(list, (num) => num === 0);

  expect(result).toEqual([[0], [0], [0], [0]]);
});
