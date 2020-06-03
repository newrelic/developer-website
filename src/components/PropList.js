import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { SPECIAL_NUMBERS } from '../utils/propConstants';

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
  const mapArgsToShapes = ([name, prop]) => ({
    ...processPropType(component, `${propName}.${name}`, prop),
    name,
  });

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
    shapes.push(Object.entries(args[0]).map(mapArgsToShapes));
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
  const isArray = Array.isArray(defaultValue);
  const defaultType = typeof defaultValue;

  let defaultValue = component?.defaultProps?.[propName];

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

        const type = processType(component, name, propMeta);
        const desc = propDocs.text;

        const defaultValue = getDefaultValue(
          component,
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
  component: PropTypes.func,
};

export default PropList;
