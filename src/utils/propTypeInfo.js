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

  if (typeof defaultValue === 'boolean') {
    return defaultValue.toString();
  }

  if (Array.isArray(defaultValue)) {
    return JSON.stringify(defaultValue);
  }

  if (typeof defaultValue === 'object') {
    return undefined;
  }

  if (isEnum(component.propTypes[propTypeName])) {
    const staticProperty = toStaticPropertyName(propTypeName);
    const property = Object.entries(component[staticProperty]).find(
      ([_, value]) => value === defaultValue
    )[0];

    return `${component.name}.${staticProperty}.${property}`;
  }

  if (typeof defaultValue === 'number') {
    const specialNumber = findSpecialNumber(defaultValue);

    return specialNumber ? `Number.${specialNumber}` : defaultValue;
  }

  return defaultValue;
};
