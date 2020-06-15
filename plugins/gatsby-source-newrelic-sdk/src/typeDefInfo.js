const IGNORED_TYPE_DEFS = [
  'Object',
  'ReactNode',
  'Event',
  'number',
  'string',
  'boolean',
];

const flatten = (arr) => [].concat(...arr);

const getTypeDefNames = (tags) => {
  return flatten(Object.values(tags))
    .flatMap((tag) => [tag.type, tag.promiseType])
    .filter(Boolean)
    .filter((tag) => !IGNORED_TYPE_DEFS.includes(tag))
    .map((tag) => tag.replace(/\[\]$/, '')); // TimePickerRange[] => TimePickerRange
};

exports.getTypeDefs = (properties, sdk) => {
  return properties
    .map((property) => property && property.__docs__ && property.__docs__.tags)
    .filter(Boolean)
    .flatMap(getTypeDefNames)
    .map((name) => sdk.__typeDefs__[name])
    .filter((typeDef) => typeDef !== undefined)
    .map((typeDef) => ({
      properties: typeDef.tags.property,
      name: typeDef.tags.typedef.find((tag) => tag.identifier).identifier.name,
    }));
};
