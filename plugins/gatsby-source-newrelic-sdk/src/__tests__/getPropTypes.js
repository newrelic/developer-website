const {
  getNormalizedTypeName,
  getDefaultValue,
  getTypeMeta,
} = require('../getPropTypes');

const createDocs = (
  type,
  { description, deprecation, returnValue, params } = {}
) => {
  const docs = {
    text: description,
  };

  if (deprecation) {
    docs.tags = {
      deprecated: [deprecation],
    };
  }

  switch (type) {
    case 'func':
      docs.tags = docs.tags || {};

      if (returnValue) {
        docs.tags.returns = returnValue;
      }

      if (params) {
        docs.tags.param = params;
      }
      break;
  }

  return docs;
};

const createPropType = (name, args, { isRequired = false, docs } = {}) => {
  const propType = [{ name: 'PropTypes' }, { name }];

  if (args) {
    propType.push({ args });
  }

  if (isRequired) {
    propType.push({ name: 'isRequired' });
  }

  return { __reflect__: propType, __docs__: createDocs(name, docs) };
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

  test('returns null for undefined default values', () => {
    const component = {
      propTypes: {},
      defaultProps: {},
    };

    expect(getDefaultValue(component, 'name')).toBeNull();
  });

  test('returns "null" for default values set to null', () => {
    const component = {
      propTypes: {
        name: createPropType('string'),
      },
      defaultProps: {
        name: null,
      },
    };

    expect(getDefaultValue(component, 'name')).toEqual('null');
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

    expect(getDefaultValue(component, 'count')).toEqual('5');
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

  test('returns stringified JSON if the default value is an arbitrary object', () => {
    const component = {
      propTypes: {
        location: createPropType('object'),
      },
      defaultProps: {
        location: { state: '1234' },
      },
    };

    expect(getDefaultValue(component, 'location')).toEqual(
      JSON.stringify({ state: '1234' })
    );
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

describe('getTypeMeta', () => {
  [
    'any',
    'array',
    'element',
    'elementType',
    'number',
    'node',
    'object',
    'string',
    'symbol',
  ].forEach((type) => {
    test(`returns null for ${type} types`, () => {
      const propType = createPropType(type);
      const component = {
        propTypes: {
          [type]: propType,
        },
      };

      expect(getTypeMeta(type, propType, { component })).toBeNull();
    });
  });

  test('returns function information for func types', () => {
    const propType = createPropType('func', undefined, {
      docs: {
        description: 'A click handler',
        params: [{ description: '', name: 'event', type: 'Event' }],
      },
    });

    const component = {
      propTypes: {
        onClick: propType,
      },
    };

    expect(getTypeMeta('onClick', propType, { component })).toEqual({
      returnValue: [],
      arguments: [{ description: '', name: 'event', type: 'Event' }],
    });
  });

  test('returns nested prop type info for shape types', () => {
    const propType = createPropType('shape', [
      {
        pathname: createPropType('string', undefined, { isRequired: true }),
        search: createPropType('string'),
        hash: createPropType('string'),
      },
    ]);

    const component = {
      propTypes: {
        to: propType,
      },
    };

    expect(getTypeMeta('to', propType, { component })).toEqual({
      types: [
        {
          name: 'pathname',
          defaultValue: null,
          description: undefined,
          deprecation: null,
          isRequired: true,
          examples: [],
          type: {
            meta: null,
            raw: 'string',
            name: 'string',
          },
        },
        {
          name: 'search',
          defaultValue: null,
          description: undefined,
          deprecation: null,
          isRequired: false,
          examples: [],
          type: {
            meta: null,
            raw: 'string',
            name: 'string',
          },
        },
        {
          name: 'hash',
          defaultValue: null,
          description: undefined,
          deprecation: null,
          isRequired: false,
          examples: [],
          type: {
            meta: null,
            raw: 'string',
            name: 'string',
          },
        },
      ],
    });
  });

  test('returns constants for enum types', () => {
    const SIZE = {
      SMALL: 'sm',
      MEDIUM: 'md',
      LARGE: 'lg',
    };

    const propType = createPropType('oneOf', [Object.values(SIZE)]);

    const component = {
      name: 'Button',
      propTypes: {
        size: propType,
      },
      SIZE,
    };

    expect(getTypeMeta('size', propType, { component })).toEqual({
      constants: [
        'Button.SIZE.SMALL',
        'Button.SIZE.MEDIUM',
        'Button.SIZE.LARGE',
      ],
    });
  });

  test('returns nested type info for arrayOf types', () => {
    const propType = createPropType('arrayOf', [createPropType('string')]);

    const component = {
      propTypes: {
        names: propType,
      },
    };

    expect(getTypeMeta('names', propType, { component })).toEqual({
      itemTypes: {
        meta: null,
        raw: 'string',
        name: 'string',
      },
    });
  });

  test('returns nested type info for union types', () => {
    const propType = createPropType('oneOfType', [
      [
        createPropType('string'),
        createPropType('shape', [
          {
            pathname: createPropType('string', undefined, {
              docs: { description: 'The name of the path to link to' },
            }),
            search: createPropType('string'),
          },
        ]),
      ],
    ]);

    const component = {
      propTypes: {
        to: propType,
      },
    };

    expect(getTypeMeta('to', propType, { component })).toEqual({
      types: [
        {
          name: 'string',
          raw: 'string',
          meta: null,
        },
        {
          name: 'shape',
          raw: 'shape',
          meta: {
            types: [
              {
                name: 'pathname',
                defaultValue: null,
                description: 'The name of the path to link to',
                deprecation: null,
                isRequired: false,
                examples: [],
                type: {
                  meta: null,
                  raw: 'string',
                  name: 'string',
                },
              },
              {
                name: 'search',
                defaultValue: null,
                description: undefined,
                deprecation: null,
                isRequired: false,
                examples: [],
                type: {
                  meta: null,
                  raw: 'string',
                  name: 'string',
                },
              },
            ],
          },
        },
      ],
    });
  });

  test('handles arrayOf enum types', () => {
    const SPACE = {
      SMALL: 'sm',
      MEDIUM: 'md',
      LARGE: 'lg',
    };
    const propType = createPropType('arrayOf', [
      createPropType('oneOf', [Object.values(SPACE)]),
    ]);

    const component = {
      name: 'Button',
      propTypes: {
        space: propType,
      },
      SPACE,
    };

    expect(getTypeMeta('space', propType, { component })).toEqual({
      itemTypes: {
        meta: {
          constants: [
            'Button.SPACE.SMALL',
            'Button.SPACE.MEDIUM',
            'Button.SPACE.LARGE',
          ],
        },
        raw: 'oneOf',
        name: 'enum',
      },
    });
  });

  test('handles enums nested in shape prop types', () => {
    const OUTER_SPACE = {
      SMALL: 'sm',
      MEDIUM: 'md',
      LARGE: 'lg',
    };
    const enumPropType = createPropType('oneOf', [Object.values(OUTER_SPACE)]);
    const propType = createPropType('shape', [{ space: enumPropType }]);

    const component = {
      name: 'Button',
      propTypes: {
        outer: propType,
      },
      OUTER_SPACE,
    };

    expect(getTypeMeta('space', enumPropType, { component })).toEqual({
      constants: [
        'Button.OUTER_SPACE.SMALL',
        'Button.OUTER_SPACE.MEDIUM',
        'Button.OUTER_SPACE.LARGE',
      ],
    });
  });

  test('handles advanced case', () => {
    const CRAZY = {
      ONE: 1,
      TWO: 2,
    };

    const propType = createPropType('oneOfType', [
      [
        createPropType('string'),
        createPropType('arrayOf', [
          createPropType('shape', [
            {
              name: createPropType('string', undefined, { isRequired: true }),
              onHide: createPropType('func'),
              onHidden: createPropType('func', undefined, {
                docs: {
                  deprecation: {
                    date: 1591519180477,
                    description: 'Use onHide',
                  },
                },
              }),
            },
          ]),
        ]),
        createPropType('oneOf', [Object.values(CRAZY)]),
      ],
    ]);

    const component = {
      name: 'Wacky',
      propTypes: {
        crazy: propType,
      },
      CRAZY,
    };

    expect(getTypeMeta('crazy', propType, { component })).toEqual({
      types: [
        {
          meta: null,
          raw: 'string',
          name: 'string',
        },
        {
          raw: 'arrayOf',
          name: 'shape[]',
          meta: {
            itemTypes: {
              meta: {
                types: [
                  {
                    name: 'name',
                    defaultValue: null,
                    description: undefined,
                    deprecation: null,
                    isRequired: true,
                    examples: [],
                    type: {
                      meta: null,
                      raw: 'string',
                      name: 'string',
                    },
                  },
                  {
                    name: 'onHide',
                    defaultValue: null,
                    description: undefined,
                    deprecation: null,
                    isRequired: false,
                    examples: [],
                    type: {
                      meta: {
                        returnValue: [],
                        arguments: [],
                      },
                      raw: 'func',
                      name: 'function',
                    },
                  },
                  {
                    name: 'onHidden',
                    defaultValue: null,
                    description: undefined,
                    deprecation: null,
                    isRequired: false,
                    examples: [],
                    deprecation: {
                      date: new Date(1591519180477).toISOString(),
                      description: 'Use onHide',
                    },
                    type: {
                      meta: {
                        returnValue: [],
                        arguments: [],
                      },
                      raw: 'func',
                      name: 'function',
                    },
                  },
                ],
              },
              raw: 'shape',
              name: 'shape',
            },
          },
        },
        {
          name: 'enum',
          raw: 'oneOf',
          meta: { constants: ['Wacky.CRAZY.ONE', 'Wacky.CRAZY.TWO'] },
        },
      ],
    });
  });
});
