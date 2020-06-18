import { useMemo } from 'react';
import { getTypeDefs } from '../utils/typeDefs';
import navigationApi from '../data/navigationApi';

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
    if (window.__NR1_SDK__ == null) {
      return null;
    }

    const sdk = window.__NR1_SDK__?.default ?? {};
    const api = sdk[name];

    // The SDK does not include the navigation docs so we need to return the
    // hardcoded values
    if (name === 'navigation') {
      return navigationApi;
    }

    if (!api) {
      return null;
    }

    const apiDocs = api?.__docs__;

    const getConstants = (api) => {
      return Object.getOwnPropertyNames(api)
        .filter(
          (member) =>
            !IGNORED_METHODS.includes(member) &&
            typeof api[member] !== 'function'
        )
        .map((member) => {
          return {
            name: `${name}.${member}`,
            value: api[member],
          };
        });
    };

    const properties = Object.getOwnPropertyNames(api)
      .filter((key) => !IGNORED_METHODS.includes(key))
      .map((key) => api[key]?.__docs__?.tags)
      .filter(Boolean);

    return {
      description: apiDocs?.text,
      usage: `import { ${name} } from 'nr1'`,
      typeDefs: getTypeDefs(properties),
      constants: getConstants(api),
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
  }, [name]);
};

export default useApiDoc;
