import { range, partition } from '../array';

describe('range', () => {
  test('generates a range from start to end', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('handles non-zero started range', () => {
    expect(range(3, 6)).toEqual([3, 4, 5, 6]);
  });

  test('generates single number if start and end are the same', () => {
    expect(range(4, 4)).toEqual([4]);
  });
});

describe('partition', () => {
  test('generates a tuple of values that do and do not satisfy the predicate', () => {
    const result = partition([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0);
    const [evens, odds] = result;

    expect(result).toHaveLength(2);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('handles values that all satisfy the predicate', () => {
    const [evens, odds] = partition([2, 4, 6], (num) => num % 2 === 0);

    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([]);
  });

  test('handles values that all do not satisfy the predicate', () => {
    const [evens, odds] = partition([1, 3, 5], (num) => num % 2 === 0);

    expect(evens).toEqual([]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('handles an empty array', () => {
    const result = partition([], () => true);

    expect(result).toEqual([[], []]);
  });
});
