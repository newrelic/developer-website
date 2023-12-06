const IGNORED_TYPE_DEFS = [];

const flatten = (arr) => [].concat(...arr);
const uniqBy = (arr, key) => {
  return [...new Set(arr.map((item) => item[key]))].map((value) =>
    arr.find((item) => item[key] === value)
  );
};

const getTypeDefsFromProperty = (property, sdk) => {
  return [property.type, property.promiseType]
    .filter(Boolean)
    .filter((name) => !IGNORED_TYPE_DEFS.includes(name))
    .map((name) => name.replace(/\[\]$/, '')) // TimePickerRange[] => TimePickerRange
    .map((name) => sdk.__typeDefs__[name])
    .filter((typeDef) => typeDef !== undefined)
    .flatMap((typeDef) => [
      typeDef,
      ...typeDef.tags.property.flatMap((property) =>
        getTypeDefsFromProperty(property, sdk)
      ),
    ])
    .filter(Boolean);
};

export const getTypeDefs = (properties, sdk) => {
  const typeDefs = properties
    .map((property) => property && property.__docs__ && property.__docs__.tags)
    .filter(Boolean)
    .flatMap((tags) => flatten(Object.values(tags)))
    .flatMap((property) => getTypeDefsFromProperty(property, sdk))
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

  return uniqBy(typeDefs, 'name');
};
