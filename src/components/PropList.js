import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { SPECIAL_NUMBERS } from '../utils/propConstants';

// TODO: do we need this?
const toStaticName = (propName) =>
  propName
    .replace(/(.+?)(?=[A-Z])/g, '$1_')
    .replace('.', '_')
    .toUpperCase();

// TODO: do we need this?
const processPropType = (
  component,
  componentName,
  propName,
  __docs__,
  __reflect__
) => {
  const type = processType(component, componentName, propName, __reflect__);

  const staticName = toStaticName(propName);
  const defaultValue = getDefaultValue(
    component,
    componentName,
    propName,
    type.isOneOf,
    staticName
  );

  const enums =
    type.isOneOf || type.isArrayOfOneOf
      ? Object.keys(component[staticName] || {}).map(
          (name) => `${componentName}.${staticName}.${name}`
        )
      : [];

  return {
    ...type,
    description: __docs__?.text,
    example: __docs__?.tags?.examples?.[0],
    isRequired: __reflect__.some((item) => item.name === 'isRequired'),
    params: __docs__?.tags?.param,
    deprecated: __docs__?.tags?.deprecated?.[0],
    returns: __docs__?.tags?.returns,
    defaultValue,
    enums,
  };
};

// TODO: refactor
const processType = (component, componentName, propName, __reflect__) => {
  const isOneOf = __reflect__[1].name === 'oneOf';
  const isArrayOf = __reflect__[1].name === 'arrayOf';
  const isArrayOfOneOf =
    isArrayOf && __reflect__[2].args[0].__reflect__[1].name === 'oneOf';

  let displayType;
  let shapes = [];

  const mapArgsToTypes = (arg) => {
    const { displayType, shapes: s } = processType(
      component,
      componentName,
      propName,
      arg.__reflect__
    );
    shapes = shapes.concat(s);

    return displayType;
  };
  const mapArgsToShapes = ([name, prop]) => ({
    ...processPropType(
      component,
      componentName,
      `${propName}.${name}`,
      prop.__docs__,
      prop.__reflect__
    ),
    name,
  });

  const args = (__reflect__.find((m) => m.args) || {}).args;

  switch (__reflect__[1].name) {
    case 'oneOf':
      displayType = 'enum';
      break;
    case 'oneOfType':
      displayType = args[0].map(mapArgsToTypes).join('|');
      break;
    case 'arrayOf':
      const arrayTypes = args.map(mapArgsToTypes).toString();
      displayType =
        arrayTypes.indexOf('|') >= 0 ? `(${arrayTypes})[]` : `${arrayTypes}[]`;
      break;
    case 'func':
      displayType = 'function';
      break;
    case 'bool':
      displayType = 'boolean';
      break;
    default:
      displayType = __reflect__[1].name;
  }

  if (displayType === 'shape') {
    shapes.push(Object.entries(args[0]).map(mapArgsToShapes));
  }

  return {
    displayType,
    isOneOf,
    isArrayOfOneOf,
    shapes,
  };
};

// TODO: refactor
const getDefaultValue = (
  component,
  componentName,
  propName,
  isOneOf,
  staticName
) => {
  let defaultValue = component?.defaultProps?.[propName];

  // If default value is an object then is a default value for a shape propType
  if (
    defaultValue !== null &&
    !Array.isArray(defaultValue) &&
    typeof defaultValue === 'object'
  ) {
    defaultValue = undefined;
  }

  // Find default enum if exists
  if (isOneOf && defaultValue !== undefined) {
    const defaultValueStaticName = Object.entries(component[staticName]).find(
      ([_, value]) => value === defaultValue
    )[0];

    defaultValue = `${componentName}.${staticName}.${defaultValueStaticName}`;
  }

  if (typeof defaultValue === 'number') {
    const specialNumber = SPECIAL_NUMBERS.find(
      (number) => Number[number] === defaultValue
    );
    defaultValue = specialNumber ? `Number.${specialNumber}` : defaultValue;
  }

  // Serialize array default values
  if (Array.isArray(defaultValue)) {
    defaultValue = JSON.stringify(defaultValue);
  }

  if (typeof defaultValue === 'boolean') {
    defaultValue = defaultValue.toString();
  }

  return defaultValue;
};

const PropList = ({ component }) => {
  const { propTypes, defaultProps } = component;

  if (!propTypes && !defaultProps) {
    return <p>There are no props for this component.</p>;
  }

  return (
    <div>
      {Object.entries(propTypes).map(([name, propData]) => {
        const propDocs = propData.__docs__;
        const propMeta = propData.__reflect__;

        const type = processType(component, component.name, name, propMeta);
        const desc = propDocs.text;

        const defaultValue = getDefaultValue(
          component,
          component.name,
          name,
          type.isOneOf,
          toStaticName(name)
        );

        return (
          <div key={name}>
            <hr />
            <h3>{name}</h3>
            <div>{type.displayType}</div>
            <ReactMarkdown source={desc} />
            {defaultValue !== undefined && (
              <div>default: {String(defaultValue)}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// TODO: can this be better defined?
PropList.propTypes = {
  component: PropTypes.any,
};

export default PropList;
