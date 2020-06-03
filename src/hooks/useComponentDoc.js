import { useMemo } from 'react';

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

const useComponentDoc = (componentName) => {
  if (typeof window === 'undefined') global.window = {};

  return useMemo(() => {
    const component = window?.__NR1_SDK__?.default?.[componentName];

    return {
      description: component?.__docs__.text,
      examples: component?.__docs__.tags.examples ?? [],
      methods: Object.getOwnPropertyNames(component).filter(
        (member) =>
          !IGNORED_METHODS.includes(member) &&
          typeof component[member] === 'function'
      ),
    };
  }, [componentName, window?.__NR1_SDK__]);
};

export default useComponentDoc;
