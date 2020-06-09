import { useMemo } from 'react';

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

const IGNORED_METHODS_BY_LIB = {
  logger: ['deprecate'],
};

const useApiDoc = (name) => {
  if (typeof window === 'undefined') global.window = {};

  return useMemo(() => {
    const sdk = window.__NR1_SDK__?.default ?? {};
    const api = sdk[name];

    if (!api) {
      return null;
    }

    const apiDocs = api?.__docs__;

    return {
      description: apiDocs?.text,
      usage: `import { ${name} } from 'nr1'`,
      methods: Object.getOwnPropertyNames(api)
        .filter(
          (member) =>
            !IGNORED_METHODS.includes(member) &&
            typeof api[member] === 'function'
        )
        .filter(
          (member) =>
            !IGNORED_METHODS_BY_LIB[name] ||
            !IGNORED_METHODS_BY_LIB[name].includes(member)
        )
        .map((member) => {
          const methodDocs = api[member].__docs__;

          return {
            name: `${name}.${member}`,
            description: methodDocs?.text,
            returnValue: methodDocs?.tags.return?.[0] ?? { type: 'undefined' },
            params: methodDocs?.tags.param ?? [],
            examples: methodDocs?.tags.examples ?? [],
          };
        }),
    };
  }, [name, window?.__NR1_SDK__]);
};

export default useApiDoc;
