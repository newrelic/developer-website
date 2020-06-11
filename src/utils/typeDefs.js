const IGNORED_TYPE_DEFS = [
  'Object',
  'ReactNode',
  'Event',
  'number',
  'string',
  'boolean',
];

export const pullTypeDefNames = (tags) => {
  return Object.values(tags)
    .reduce((acc, tag) => acc.concat(tag), [])
    .flatMap((tag) => [tag.type, tag.promiseType])
    .filter(Boolean)
    .filter((tag) => !IGNORED_TYPE_DEFS.includes(tag))
    .map((tag) => tag.replace(/\[\]$/, '')); // TimePickerRange[] => TimePickerRange
};
