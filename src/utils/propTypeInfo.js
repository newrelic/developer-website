const UNION_DELIMITER = '|';

const SPECIAL_NUMBERS = [
  'MAX_VALUE',
  'MIN_VALUE',
  'NEGATIVE_INFINITY',
  'POSITIVE_INFINITY',
  'MAX_SAFE_INTEGER',
  'MIN_SAFE_INTEGER',
  'EPSILON',
];

const getArgs = (propType) =>
  propType.__reflect__.find(({ args }) => args)?.args;

const isEnum = (propType) => getRawTypeName(propType) === 'oneOf';
const isUnion = (propType) => getRawTypeName(propType) === 'oneOfType';

const findSpecialNumber = (number) =>
  SPECIAL_NUMBERS.find((property) => Number[property] === number);

const toStaticPropertyName = (name) =>
  name
    .replace(/(.+?)(?=[A-Z])/g, '$1_')
    .replace('.', '_')
    .toUpperCase();

export const getRawTypeName = (propType) => propType.__reflect__[1].name;

export const getNormalizedTypeName = (propType) => {
  const name = getRawTypeName(propType);

  switch (name) {
    case 'bool':
      return 'boolean';
    case 'func':
      return 'function';
    case 'oneOf':
      return 'enum';
    case 'oneOfType': {
      const [propTypes] = getArgs(propType);

      return propTypes
        .map((propType) => getNormalizedTypeName(propType))
        .join(UNION_DELIMITER);
    }
    case 'arrayOf': {
      const [arrayOfPropType] = getArgs(propType);
      const typeName = getNormalizedTypeName(arrayOfPropType);

      return isUnion(arrayOfPropType) ? `(${typeName})[]` : `${typeName}[]`;
    }
    default:
      return name;
  }
};

export const getDefaultValue = (component, propTypeName) => {
  const defaultValue = component.defaultProps?.[propTypeName];

  if (defaultValue == null) {
    return defaultValue;
  }

  if (isEnum(component.propTypes[propTypeName])) {
    const staticProperty = toStaticPropertyName(propTypeName);
    const property = Object.entries(component[staticProperty]).find(
      ([_, value]) => value === defaultValue
    )[0];

    return `${component.name}.${staticProperty}.${property}`;
  }

  if (typeof defaultValue === 'boolean') {
    return defaultValue.toString();
  }

  if (Array.isArray(defaultValue)) {
    return JSON.stringify(defaultValue);
  }

  if (typeof defaultValue === 'object') {
    return undefined;
  }

  if (typeof defaultValue === 'number') {
    const specialNumber = findSpecialNumber(defaultValue);

    return specialNumber ? `Number.${specialNumber}` : defaultValue;
  }

  return defaultValue;
};

export const getTypeMeta = (name, propType, { component }) => {
  const propTypeDocs = propType.__docs__;

  switch (getRawTypeName(propType)) {
    case 'func':
      return {
        returnValue: propTypeDocs.tags?.returnValue ?? { type: 'undefined' },
        params: propTypeDocs.tags?.param,
      };
    case 'shape': {
      const [shape] = getArgs(propType);

      return {
        types: Object.entries(shape).map(([name, propType]) =>
          getPropTypeDefinition(component, name, propType)
        ),
      };
    }
    case 'oneOf': {
      const staticProperty = toStaticPropertyName(name);

      return {
        constants: Object.keys(component[staticProperty] ?? {}).map(
          (name) => `${component.name}.${staticProperty}.${name}`
        ),
      };
    }
    case 'arrayOf': {
      const [arrayOfPropType] = getArgs(propType);

      return {
        itemTypes: {
          meta: getTypeMeta(name, arrayOfPropType, { component }),
          raw: getRawTypeName(arrayOfPropType),
          name: getNormalizedTypeName(arrayOfPropType),
        },
      };
    }
    default:
      return null;
  }
};

export const getPropTypeDefinition = (component, name, propType) => {
  const propDocs = propType.__docs__;
  const propMeta = propType.__reflect__;

  return {
    name,
    defaultValue: getDefaultValue(component, name),
    description: propDocs?.text,
    deprecation: propDocs?.tags?.deprecated?.[0] ?? null,
    isRequired: propMeta?.some((item) => item.name === 'isRequired') ?? false,
    type: {
      meta: getTypeMeta(name, propType, { component }),
      raw: getRawTypeName(propType),
      name: getNormalizedTypeName(propType),
    },
  };
};
