import { useMemo } from 'react';
import { getPropTypeDefinition } from '../utils/propTypeInfo';

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

const extractPropTypes = (component) => {
  return Object.entries(component.propTypes || {}).map(([name, propType]) =>
    getPropTypeDefinition(component, name, propType)
  );
};

const useComponentDoc = (componentName) => {
  if (typeof window === 'undefined') global.window = {};

  return useMemo(() => {
    const sdk = window.__NR1_SDK__?.default ?? {};
    const component = sdk[componentName];

    if (!component) {
      return null;
    }

    const componentDocs = component?.__docs__;

    return {
      description: componentDocs?.text,
      examples: componentDocs?.tags.examples ?? [],
      usage: `import { ${componentName} } from 'nr1'`,
      propTypes: extractPropTypes(component),
      methods: Object.getOwnPropertyNames(component)
        .filter(
          (member) =>
            !IGNORED_METHODS.includes(member) &&
            typeof component[member] === 'function'
        )
        .map((member) => {
          const methodDocs = component[member].__docs__;

          return {
            name: `${componentName}.${member}`,
            description: methodDocs?.text,
            returnValue: methodDocs?.tags.return?.[0] ?? { type: 'undefined' },
            params: methodDocs?.tags.param ?? [],
            examples: methodDocs?.tags.examples ?? [],
          };
        }),
    };
  }, [componentName, window?.__NR1_SDK__]);
};

export default useComponentDoc;
