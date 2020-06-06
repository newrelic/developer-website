const UNION_DELIMITER = '|';

const getArgs = (propType) =>
  propType.__reflect__.find(({ args }) => args)?.args;

const isUnion = (propType) => getRawTypeName(propType) === 'oneOfType';

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
