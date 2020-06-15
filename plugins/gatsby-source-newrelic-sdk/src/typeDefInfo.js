const IGNORED_TYPE_DEFS = [
  'Object',
  'ReactNode',
  'Event',
  'number',
  'string',
  'boolean',
];

const flatten = (arr) => [].concat(...arr);

exports.getTypeDefs = (properties, sdk) => {
  return properties
    .map((property) => property && property.__docs__ && property.__docs__.tags)
    .filter(Boolean)
    .flatMap((tags) => flatten(Object.values(tags)))
    .flatMap((tag) => [tag.type, tag.promiseType])
    .filter(Boolean)
    .filter((name) => !IGNORED_TYPE_DEFS.includes(name))
    .map((name) => name.replace(/\[\]$/, '')) // TimePickerRange[] => TimePickerRange
    .map((name) => sdk.__typeDefs__[name])
    .filter((typeDef) => typeDef !== undefined)
    .map((typeDef) => ({
      properties: typeDef.tags.property.map(
        ({ type, description, identifier }) => ({
          type,
          description,
          name: identifier.name,
        })
      ),
      name: typeDef.tags.typedef.find((tag) => tag.identifier).identifier.name,
    }));
};
