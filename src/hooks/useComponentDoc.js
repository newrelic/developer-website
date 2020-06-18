import { useMemo } from 'react';
import { getPropTypeDefinition } from '../utils/propTypeInfo';
import { getTypeDefs } from '../utils/typeDefs';

const IGNORED_LIVE_EXAMPLES = ['Dropdown', 'Modal', 'Tooltip', 'Select'];

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

const getExamples = (component) => {
  const examples = component?.__docs__?.tags.examples ?? [];
  const hideLive = IGNORED_LIVE_EXAMPLES.includes(component.name);

  if (!hideLive) {
    return examples;
  }

  return examples.map((example) => {
    return { ...example, options: { ...example.options, live: false } };
  });
};

const getPropTypes = (component) => {
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

    const tagsFromComponentProperties = Object.getOwnPropertyNames(component)
      .filter((key) => !IGNORED_METHODS.includes(key))
      .map((key) => component[key]?.__docs__?.tags)
      .filter(Boolean);

    const tagsFromPropTypes = component.propTypes
      ? Object.getOwnPropertyNames(component.propTypes).map(
          (key) => component.propTypes[key]?.__docs__?.tags
        )
      : [];

    return {
      description: component?.__docs__?.text,
      examples: getExamples(component),
      usage: `import { ${componentName} } from 'nr1'`,
      propTypes: getPropTypes(component),
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
      typeDefs: getTypeDefs(
        tagsFromComponentProperties.concat(tagsFromPropTypes)
      ),
    };
  }, [componentName]);
};

export default useComponentDoc;
