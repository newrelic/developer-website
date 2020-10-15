import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useComponentDoc from '../hooks/useComponentDoc';

const API_DOCS = ['events', 'tessen', 'instrumentation', 'logger', 'nerdlet'];

const PlaygroundSidebar = ({ onClick, onPlaygroundSubmit }) => {
  const sdk = window.__NR1_SDK__?.default ?? {};
  if (!sdk) return null;
  return Object.keys(sdk).map((component, i) => {
    if (API_DOCS.includes(component)) {
      return;
    }

    const handleClick = () => {
      onClick(component);
    };

    const handleSubmit = (props) => {
      onPlaygroundSubmit(component, props);
    };

    return (
      <SidebarItem
        onClick={handleClick}
        handleSubmit={handleSubmit}
        key={i}
        component={component}
      >
        {component}
      </SidebarItem>
    );
  });
};

// component with props listed
// keep track of selected components

const SidebarItem = ({ onClick, children, handleSubmit, component }) => {
  const [selectedProps, setSelected] = useState([]);

  const { propTypes = [] } = useComponentDoc(component) ?? {};

  const toggleChecks = (e) => {
    const label = e.target.value;
    if (selectedProps.includes(label)) {
      const value = new Set(selectedProps);
      value.delete(label);
      setSelected([...value]);
    } else {
      setSelected([...selectedProps, label]);
    }
  };

  const onSubmit = () => {
    const sentProps = createPropsObject(selectedProps, propTypes);

    handleSubmit(sentProps);
  };

  // const onPropValueSelect = (prop, selectedPropValues) => {

  // }

  return (
    <div
      css={css`
        padding: 0.5rem 0;
      `}
      role="button"
      onKeyDown={onClick}
      tabIndex="0"
      onClick={onClick}
    >
      {children}
      {propTypes.map((prop, i) => {
        return (
          <>
            <br />
            <input
              onChange={toggleChecks}
              key={i}
              type="checkbox"
              value={prop.name}
              name={prop.name}
            />
            <label htmlFor={prop.name}>{prop.name}</label>
            <PropTypeList
              type={prop.type}
              propName={prop.name}
              component={component}
            />
          </>
        );
      })}
      <br />
      <input type="submit" onClick={onSubmit} />
    </div>
  );
};

SidebarItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  component: PropTypes.string,
};

const createPropsObject = (selectedProps, propTypes) => {
  return selectedProps.reduce((acc, prop) => {
    const currentProp = propTypes.find((el) => el.name === prop);

    acc[prop] = currentProp.defaultValue
      ? String(currentProp.defaultValue)
      : propTypeMap[currentProp.type.name];

    return acc;
  }, {});
};

const propTypeMap = {
  boolean: 'true',
  string: "''",
  function: '()=>{}',
  number: '',
  enum: '',
};

const PropTypeList = ({ type, propName }) => {
  const [selectedPropValues, setSelectedPropValues] = useState(null);

  const onSelect = (e) => {
    setSelectedPropValues(e.target.value);
  };

  const onMultiChecks = (e) => {
    const label = e.target.value;
    if (selectedPropValues.includes(label)) {
      const value = new Set(selectedPropValues);
      value.delete(label);
      setSelectedPropValues([...value]);
    } else {
      setSelectedPropValues([...selectedPropValues, label]);
    }
  };

  if (!type) return null;
  switch (type.raw) {
    case 'oneOf':
      if (!type) return null;

      return (
        <form
          css={css`
            padding-left: 1rem;
          `}
        >
          {type.meta.constants.map((constant, i) => {
            return (
              <>
                <br />
                <input
                  key={i}
                  type="radio"
                  name={propName}
                  value={constant}
                  onClick={onSelect}
                />
                <label htmlFor={constant}>{constant}</label>
              </>
            );
          })}
        </form>
      );
    case 'arrayOf':
      if (!type.meta?.itemTypes?.meta?.constants) return null;
      return (
        <form
          css={css`
            padding-left: 1rem;
          `}
        >
          {type.meta.itemTypes.meta.constants.map((constant, i) => {
            return (
              <>
                <br />
                <input
                  onClick={onMultiChecks}
                  type="checkbox"
                  name={constant}
                  value={constant}
                />
                <label key={i} htmlFor={constant}>
                  {constant}
                </label>
              </>
            );
          })}
        </form>
      );
    default:
      return null;
  }
};

export default PlaygroundSidebar;
