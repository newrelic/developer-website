import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, SearchInput, Surface } from '@newrelic/gatsby-theme-newrelic';
import useComponentDoc from '../hooks/useComponentDoc';
import Checkbox from './Checkbox';

const API_DOCS = ['events', 'tessen', 'instrumentation', 'logger', 'nerdlet'];

const PlaygroundSidebar = ({ onPlaygroundSubmit }) => {
  const sdk = window.__NR1_SDK__?.default ?? {};
  const [searchTerm, setSearchTerm] = useState('');
  if (!sdk) return null;
  const SidebarItems = () =>
    Object.keys(sdk).map((component, i) => {
      if (API_DOCS.includes(component)) {
        return;
      }

      if (
        searchTerm !== '' &&
        !component.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return;
      }

      const handleSubmit = (props) => {
        onPlaygroundSubmit(component, props);
      };

      return (
        <SidebarItem
          handleSubmit={handleSubmit}
          key={i}
          component={component}
        />
      );
    });
  return (
    <div
      css={css`
        width: 400px;
        overflow: scroll;
        padding: 1.5rem;
      `}
    >
      <SearchInput
        style={{ margin: '1rem 0' }}
        placeholder="Search Components"
        onClear={() => setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <SidebarItems />
    </div>
  );
};

const SidebarItem = ({ handleSubmit, component }) => {
  const [selectedProps, setSelected] = useState({});
  const [showProps, setShowProps] = useState(false);

  const { propTypes = [] } = useComponentDoc(component) ?? {};

  const toggleChecks = (prop) => {
    const newProps = selectedProps;

    if (Object.keys(selectedProps).includes(prop)) {
      delete newProps[prop];
    } else {
      const currentProp = propTypes.find((el) => el.name === prop);
      newProps[prop] = currentProp.defaultValue
        ? String(currentProp.defaultValue)
        : propTypeMap[currentProp.type.name];
    }

    setSelected({ ...newProps });
    console.log(newProps);
  };

  const onSubmit = () => {
    handleSubmit(selectedProps);
  };

  const onPropValueSelect = (prop, selectedPropValues) => {
    const newProps = selectedProps;

    if (Object.keys(selectedProps).includes(prop)) {
      if (typeof selectedPropValues === 'string') {
        newProps[prop] = selectedPropValues;
      } else if (Array.isArray(selectedPropValues)) {
        newProps[prop] = `[${selectedPropValues.toString()}]`;
      }

      setSelected(newProps);
    }
  };

  return (
    <Surface
      css={css`
        padding: 0.5rem 1rem;
        margin: 1rem 0;
      `}
      base={Surface.BASE.SECONDARY}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <h3
          css={css`
            &:hover {
              cursor: pointer;
              opacity: 0.8;
            }
          `}
          onClick={() => setShowProps(!showProps)}
        >
          {component}
        </h3>
        <Button
          onClick={onSubmit}
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.EXTRA_SMALL}
        >
          Add
        </Button>
      </div>
      {showProps &&
        propTypes.map((prop, i) => {
          return (
            <div key={i}>
              <Checkbox
                onChange={() => toggleChecks(prop.name)}
                id={`${component}-${prop.name}-${i}`}
                value={prop.name}
                name={prop.name}
                checked={Object.keys(selectedProps).includes(prop.name)}
              />
              {'  '}
              <span>{prop.name}</span>
              {Object.keys(selectedProps).includes(prop.name) && (
                <PropTypeList
                  type={prop.type}
                  propName={prop.name}
                  component={component}
                  onPropValueSelect={onPropValueSelect}
                />
              )}
            </div>
          );
        })}
    </Surface>
  );
};

SidebarItem.propTypes = {
  handleSubmit: PropTypes.func,
  component: PropTypes.string,
};

const propTypeMap = {
  boolean: 'true',
  string: "''",
  function: '()=>{}',
  number: '',
  enum: '',
};

const PropTypeList = ({ type, propName, onPropValueSelect }) => {
  const [selectedPropValues, setSelectedPropValues] = useState(null);

  const onSelect = (e) => {
    setSelectedPropValues(e.target.value);
    onPropValueSelect(propName, e.target.value);
  };

  const onMultiChecks = (e) => {
    const label = e.target.value;
    let targetValue;
    if (selectedPropValues?.includes(label)) {
      const value = new Set(selectedPropValues);
      value.delete(label);
      targetValue = [...value];
    } else if (!selectedPropValues) {
      targetValue = [label];
    } else {
      targetValue = [...selectedPropValues, label];
    }
    setSelectedPropValues(targetValue);
    onPropValueSelect(propName, targetValue);
  };

  switch (type.raw) {
    case 'oneOf':
      if (!type) return null;

      return (
        <div
          css={css`
            padding-left: 1rem;
            margin: 0;
            max-height: 200px;
            overflow-y: scroll;
          `}
        >
          {type.meta.constants.map((constant, i) => {
            return (
              <div
                css={css`
                  width: 100%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
                key={i}
              >
                <input
                  key={i}
                  type="radio"
                  name={propName}
                  value={constant}
                  onClick={onSelect}
                />
                {'  '}
                <span>{constant}</span>
              </div>
            );
          })}
        </div>
      );
    case 'arrayOf':
      if (!type.meta?.itemTypes?.meta?.constants) return null;
      return (
        <div
          css={css`
            padding-left: 1rem;
            margin: 0;
            max-height: 200px;
            overflow-y: scroll;
          `}
        >
          {type.meta.itemTypes.meta.constants.map((constant, i) => {
            return (
              <div
                key={i}
                css={css`
                  width: 100%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                <input
                  onClick={onMultiChecks}
                  type="checkbox"
                  name={constant}
                  value={constant}
                />
                {'  '}
                <span>{constant}</span>
              </div>
            );
          })}
        </div>
      );
    default:
      return null;
  }
};

export default PlaygroundSidebar;
