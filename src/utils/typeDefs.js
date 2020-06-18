const IGNORED_TYPE_DEFS = [
  'Object',
  'ReactNode',
  'Event',
  'number',
  'string',
  'boolean',
];

const pullTypeDefNames = (tags) => {
  return Object.values(tags)
    .reduce((acc, tag) => acc.concat(tag), [])
    .flatMap((tag) => [tag.type, tag.promiseType])
    .filter(Boolean)
    .filter((tag) => !IGNORED_TYPE_DEFS.includes(tag))
    .map((tag) => tag.replace(/\[\]$/, '')); // TimePickerRange[] => TimePickerRange
};

export const getTypeDefs = (tags) => {
  const allTypeDefs = window.__NR1_SDK__.default.__typeDefs__;

  return tags
    .flatMap(pullTypeDefNames)
    .map((name) => allTypeDefs[name])
    .filter((typeDef) => typeDef !== undefined)
    .map((typeDef) => ({
      properties: typeDef.tags.property.map((property) => ({
        name: property.identifier.name,
        description: property.description,
        type: property.type,
      })),
      name: typeDef.tags.typedef.find((tag) => tag.identifier).identifier.name,
    }));
};
