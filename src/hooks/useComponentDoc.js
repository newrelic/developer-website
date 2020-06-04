import { useMemo } from 'react';
import { SPECIAL_NUMBERS } from '../utils/propConstants';

const IGNORED_METHODS = [
  'prototype',
  'length',
  'name',
  'propTypes',
  'getDerivedStateFromProps',
  'defaultProps',
];

const extractPropTypes = (component) => {
  return Object.entries(component.propTypes || {}).map(([name, propData]) => {
    const propDocs = propData.__docs__;
    const propMeta = propData.__reflect__;

    const type = processType(component, name, propMeta);

    const defaultValue = getDefaultValue(
      component,
      name,
      type.isOneOf,
      toStaticName(name)
    );

    return {
      name,
      description: propDocs.text,
      type: type.displayType,
      defaultValue,
    };
  });
};

const toStaticName = (propName) =>
  propName
    .replace(/(.+?)(?=[A-Z])/g, '$1_')
    .replace('.', '_')
    .toUpperCase();

const processPropType = (component, propName, prop) => {
  const propDocs = prop.__docs__;
  const propMeta = prop.__reflect__;
  const type = processType(component, propName, propMeta);

  const staticName = toStaticName(propName);
  const defaultValue = getDefaultValue(
    component,
    propName,
    type.isOneOf,
    staticName
  );

  const enums =
    type.isOneOf || type.isArrayOfOneOf
      ? Object.keys(component[staticName] || {}).map(
          (name) => `${component.name}.${staticName}.${name}`
        )
      : [];

  return {
    ...type,
    description: propDocs?.text,
    example: propDocs?.tags?.examples?.[0],
    isRequired: propMeta.some((item) => item.name === 'isRequired'),
    params: propDocs?.tags?.param,
    deprecated: propDocs?.tags?.deprecated?.[0],
    returns: propDocs?.tags?.returns,
    defaultValue,
    enums,
  };
};

// TODO: refactor: remove switch? remove let usage? breakdown into smaller functions?
const processType = (component, propName, propMeta) => {
  const propTypeName = propMeta[1].name;
  const isOneOf = propTypeName === 'oneOf';
  const isArrayOf = propTypeName === 'arrayOf';
  const isArrayOfOneOf =
    isArrayOf && propMeta[2].args[0].__reflect__[1].name === 'oneOf';

  let displayType;
  let shapes = [];

  const mapArgsToTypes = (arg) => {
    const { displayType, shapes: s } = processType(
      component,
      propName,
      arg.__reflect__
    );
    shapes = shapes.concat(s);

    return displayType;
  };

  const args = (propMeta.find((m) => m.args) || {}).args;

  switch (propTypeName) {
    case 'oneOf':
      displayType = 'enum';
      break;
    case 'oneOfType':
      displayType = args[0].map(mapArgsToTypes).join('|');
      break;
    case 'arrayOf': {
      const arrayTypes = args.map(mapArgsToTypes).toString();
      displayType =
        arrayTypes.indexOf('|') >= 0 ? `(${arrayTypes})[]` : `${arrayTypes}[]`;
      break;
    }
    case 'func':
      displayType = 'function';
      break;
    case 'bool':
      displayType = 'boolean';
      break;
    default:
      displayType = propTypeName;
  }

  if (displayType === 'shape') {
    shapes.push(
      Object.entries(args[0]).map(([name, prop]) => ({
        ...processPropType(component, `${propName}.${name}`, prop),
        name,
      }))
    );
  }

  return {
    displayType,
    isOneOf,
    isArrayOfOneOf,
    shapes,
  };
};

// TODO: refactor: remove let? earlier / opportunistic returns?
const getDefaultValue = (component, propName, isOneOf, staticName) => {
  let defaultValue = component?.defaultProps?.[propName];

  const isArray = Array.isArray(defaultValue);
  const defaultType = typeof defaultValue;

  // If default value is an object then is a default value for a shape propType
  if (defaultValue !== null && !isArray && defaultType === 'object') {
    defaultValue = undefined;
  }

  // Find default enum if exists
  if (isOneOf && defaultValue !== undefined) {
    const defaultValueStaticName = Object.entries(component[staticName]).find(
      (name) => name[1] === defaultValue
    )[0];

    defaultValue = `${component.name}.${staticName}.${defaultValueStaticName}`;
  }

  if (defaultType === 'number') {
    const specialNumber = SPECIAL_NUMBERS.find(
      (number) => Number[number] === defaultValue
    );
    defaultValue = specialNumber ? `Number.${specialNumber}` : defaultValue;
  }

  // Serialize array default values
  if (isArray) {
    defaultValue = JSON.stringify(defaultValue);
  }

  if (defaultType === 'boolean') {
    defaultValue = defaultValue.toString();
  }

  return defaultValue;
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
      defaultProps: component.defaultProps,
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
            params: methodDocs?.tags.param,
          };
        }),
    };
  }, [componentName, window?.__NR1_SDK__]);
};

export default useComponentDoc;
