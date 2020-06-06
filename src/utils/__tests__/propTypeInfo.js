import { getNormalizedPropType } from '../propTypeInfo';

const createPropType = (name, args, { isRequired = false } = {}) => {
  const propType = [{ name: 'PropTypes' }, { name }];

  if (args) {
    propType.push({ args });
  }

  if (isRequired) {
    propType.push({ name: 'isRequired' });
  }

  return { __reflect__: propType };
};

describe('getNormalizedPropType', () => {
  [
    'any',
    'array',
    'element',
    'elementType',
    'number',
    'node',
    'object',
    'shape',
    'string',
    'symbol',
  ].forEach((type) => {
    test(`returns "${type}" for ${type} types`, () => {
      const propType = createPropType(type);

      expect(getNormalizedPropType(propType)).toEqual(type);
    });
  });

  test('returns "boolean" for bool types', () => {
    const propType = createPropType('bool');

    expect(getNormalizedPropType(propType)).toEqual('boolean');
  });

  test('returns "function" for func types', () => {
    const propType = createPropType('func');

    expect(getNormalizedPropType(propType)).toEqual('function');
  });

  test('returns "enum" for enum types', () => {
    const propType = createPropType('oneOf');

    expect(getNormalizedPropType(propType)).toEqual('enum');
  });

  test('returns type of first argment for union types with a single argument', () => {
    const propType = createPropType('oneOfType', [[createPropType('string')]]);

    expect(getNormalizedPropType(propType)).toEqual('string');
  });

  test('pipe delimits union types with multiple types', () => {
    const propType = createPropType('oneOfType', [
      [
        createPropType('string'),
        createPropType('object'),
        createPropType('number'),
      ],
    ]);

    expect(getNormalizedPropType(propType)).toEqual('string|object|number');
  });

  test('handles union types that are required', () => {
    const propType = createPropType(
      'oneOfType',
      [
        [
          createPropType('string'),
          createPropType('object'),
          createPropType('number'),
        ],
      ],
      { isRequired: true }
    );

    expect(getNormalizedPropType(propType)).toEqual('string|object|number');
  });

  test('returns array representation for arrayOf types', () => {
    const propType = createPropType('arrayOf', [createPropType('string')]);

    expect(getNormalizedPropType(propType)).toEqual('string[]');
  });

  test('handles arrayOf enum types', () => {
    const propType = createPropType('arrayOf', [createPropType('oneOf')]);

    expect(getNormalizedPropType(propType)).toEqual('enum[]');
  });

  test('handles array of union types', () => {
    const propType = createPropType('arrayOf', [
      createPropType('oneOfType', [
        [createPropType('string'), createPropType('number')],
      ]),
    ]);

    expect(getNormalizedPropType(propType)).toEqual('(string|number)[]');
  });
});
