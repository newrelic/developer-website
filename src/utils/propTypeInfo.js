const UNION_DELIMITER = '|';

const getArgs = (propType) =>
  propType.__reflect__.find(({ args }) => args)?.args;

const isUnion = (typeName) => typeName.includes(UNION_DELIMITER);

export const getNormalizedPropType = (propType) => {
  const [_, { name }] = propType.__reflect__;

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
        .map((propType) => getNormalizedPropType(propType))
        .join(UNION_DELIMITER);
    }
    case 'arrayOf': {
      const args = getArgs(propType);
      const arrayType = getNormalizedPropType(args[0]);

      return isUnion(arrayType) ? `(${arrayType})[]` : `${arrayType}[]`;
    }
    default:
      return name;
  }
};

