const getExamples = require('./getExamples');

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

const IGNORED_PROPERTIES = [];

const getArgs = (propType) =>
  (propType.__reflect__.find(({ args }) => args) || {}).args;

const isEnum = (propType) => getRawTypeName(propType) === 'oneOf';
const isUnion = (propType) => getRawTypeName(propType) === 'oneOfType';

const matchesEnum = (property, enums) => {
  const values = Object.values(property);

  return (
    values.length === enums.length &&
    enums.every((value) => values.includes(value))
  );
};

const findSpecialNumber = (number) =>
  SPECIAL_NUMBERS.find((property) => Number[property] === number);

const toStaticPropertyName = (name) =>
  name
    .replace(/(.+?)(?=[A-Z])/g, '$1_')
    .replace('.', '_')
    .toUpperCase();

const getRawTypeName = (propType) => propType.__reflect__[1].name;

const getNormalizedTypeName = (propType) => {
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

const getDefaultValue = (component, propTypeName) => {
  const defaultValue = (component.defaultProps || {})[propTypeName];

  if (defaultValue === undefined) {
    return null;
  }

  if (defaultValue === null) {
    return 'null';
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
    return JSON.stringify(defaultValue);
  }

  if (typeof defaultValue === 'number') {
    const specialNumber = findSpecialNumber(defaultValue);

    return specialNumber ? `Number.${specialNumber}` : String(defaultValue);
  }

  return defaultValue;
};

const getTypeMeta = (name, propType, { component }) => {
  const propTypeDocs = propType.__docs__ || {};

  switch (getRawTypeName(propType)) {
    case 'func':
      console.log(propTypeDocs.tags);
      return {
        returnValue: (propTypeDocs.tags || {}).return || [],
        arguments: (propTypeDocs.tags || {}).param || [],
      };
    case 'shape': {
      const [shape] = getArgs(propType);

      return {
        types: Object.entries(shape).map(([shapePropName, propType]) =>
          getPropTypeDefinition(component, shapePropName, propType)
        ),
      };
    }
    case 'oneOf': {
      const [enums] = getArgs(propType);
      const staticProperty = Object.getOwnPropertyNames(component)
        .filter(
          (member) =>
            !IGNORED_PROPERTIES.includes(member) &&
            typeof component[member] === 'object'
        )
        .find((member) => matchesEnum(component[member], enums));

      return {
        constants: Object.keys(component[staticProperty] || {}).map(
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
    case 'oneOfType': {
      const [types] = getArgs(propType);

      return {
        types: types.map((propType) => ({
          name: getNormalizedTypeName(propType),
          raw: getRawTypeName(propType),
          meta: getTypeMeta(name, propType, { component }),
        })),
      };
    }
    default:
      return null;
  }
};

const getDeprecation = (tags) => {
  if (tags.deprecated == null) {
    return null;
  }

  const [deprecation] = tags.deprecated;

  return {
    ...deprecation,
    date: new Date(deprecation.date).toISOString(),
  };
};

const getPropTypeDefinition = (component, name, propType) => {
  const propDocs = propType.__docs__ || {};
  const propMeta = propType.__reflect__ || {};
  const tags = propDocs.tags || {};

  return {
    name,
    defaultValue: getDefaultValue(component, name),
    description: propDocs.text,
    deprecation: getDeprecation(tags),
    isRequired: propMeta.some((item) => item.name === 'isRequired') || false,
    examples: getExamples(name, { [name]: propType }),
    type: {
      meta: getTypeMeta(name, propType, { component }),
      raw: getRawTypeName(propType),
      name: getNormalizedTypeName(propType),
    },
  };
};

const getPropTypes = (component) => {
  return Object.entries(component.propTypes || {}).map(([name, propType]) =>
    getPropTypeDefinition(component, name, propType)
  );
};

exports.getRawTypeName = getRawTypeName;
exports.getNormalizedTypeName = getNormalizedTypeName;
exports.getDefaultValue = getDefaultValue;
exports.getTypeMeta = getTypeMeta;
exports.getPropTypes = getPropTypes;
