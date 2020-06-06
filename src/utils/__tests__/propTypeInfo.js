import { getNormalizedTypeName, getDefaultValue } from '../propTypeInfo';

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

describe('getNormalizedTypeName', () => {
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

      expect(getNormalizedTypeName(propType)).toEqual(type);
    });
  });

  test('returns "boolean" for bool types', () => {
    const propType = createPropType('bool');

    expect(getNormalizedTypeName(propType)).toEqual('boolean');
  });

  test('returns "function" for func types', () => {
    const propType = createPropType('func');

    expect(getNormalizedTypeName(propType)).toEqual('function');
  });

  test('returns "enum" for enum types', () => {
    const propType = createPropType('oneOf');

    expect(getNormalizedTypeName(propType)).toEqual('enum');
  });

  test('returns type of first argment for union types with a single argument', () => {
    const propType = createPropType('oneOfType', [[createPropType('string')]]);

    expect(getNormalizedTypeName(propType)).toEqual('string');
  });

  test('pipe delimits union types with multiple types', () => {
    const propType = createPropType('oneOfType', [
      [
        createPropType('string'),
        createPropType('object'),
        createPropType('number'),
      ],
    ]);

    expect(getNormalizedTypeName(propType)).toEqual('string|object|number');
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

    expect(getNormalizedTypeName(propType)).toEqual('string|object|number');
  });

  test('returns array representation for arrayOf types', () => {
    const propType = createPropType('arrayOf', [createPropType('string')]);

    expect(getNormalizedTypeName(propType)).toEqual('string[]');
  });

  test('handles arrayOf enum types', () => {
    const propType = createPropType('arrayOf', [createPropType('oneOf')]);

    expect(getNormalizedTypeName(propType)).toEqual('enum[]');
  });

  test('handles array of union types', () => {
    const propType = createPropType('arrayOf', [
      createPropType('oneOfType', [
        [createPropType('string'), createPropType('number')],
      ]),
    ]);

    expect(getNormalizedTypeName(propType)).toEqual('(string|number)[]');
  });
});

describe('getDefaultValue', () => {
  test('returns value for primitive types', () => {
    const component = {
      propTypes: {
        message: createPropType('string'),
      },
      defaultProps: {
        message: 'Hello',
      },
    };

    expect(getDefaultValue(component, 'message')).toEqual('Hello');
  });

  test('returns undefined for undefined default values', () => {
    const component = {
      propTypes: {},
      defaultProps: {},
    };

    expect(getDefaultValue(component, 'name')).toBeUndefined();
  });

  test('returns null for default values set to null', () => {
    const component = {
      propTypes: {
        name: createPropType('string'),
      },
      defaultProps: {
        name: null,
      },
    };

    expect(getDefaultValue(component, 'name')).toBeNull();
  });

  test('returns stringified boolean value when it is a boolean', () => {
    const component = {
      propTypes: {
        disabled: createPropType('bool'),
      },
      defaultProps: {
        disabled: false,
      },
    };

    expect(getDefaultValue(component, 'disabled')).toEqual('false');
  });

  test('returns a number if the default value is a number', () => {
    const component = {
      propTypes: {
        count: createPropType('number'),
      },
      defaultProps: {
        count: 5,
      },
    };

    expect(getDefaultValue(component, 'count')).toEqual(5);
  });

  test('returns special number names if the default is a special number', () => {
    const component = {
      propTypes: {
        bytes: createPropType('number'),
      },
      defaultProps: {
        bytes: Number.MAX_SAFE_INTEGER,
      },
    };

    expect(getDefaultValue(component, 'bytes')).toEqual(
      'Number.MAX_SAFE_INTEGER'
    );
  });

  test('returns undefined if the default value is an arbitrary object', () => {
    const component = {
      propTypes: {
        location: createPropType('object'),
      },
      defaultProps: {
        location: { state: '1234' },
      },
    };

    expect(getDefaultValue(component, 'location')).toBeUndefined();
  });

  test('returns stringfied representation of array if the default value is an array', () => {
    const component = {
      propTypes: {
        sizes: createPropType('array'),
      },
      defaultProps: {
        sizes: [1, 2, 3],
      },
    };

    expect(getDefaultValue(component, 'sizes')).toEqual('[1,2,3]');
  });

  test('returns static constant if the default value is a union prop', () => {
    const GAP = {
      SMALL: 1,
      MEDIUM: 2,
      LARGE: 3,
    };

    const component = {
      name: 'Grid',
      propTypes: {
        gap: createPropType('oneOf', [[GAP.SMALL, GAP.MEDIUM, GAP.LARGE]]),
      },
      defaultProps: {
        gap: GAP.SMALL,
      },
      GAP,
    };

    expect(getDefaultValue(component, 'gap')).toEqual('Grid.GAP.SMALL');
  });
});
