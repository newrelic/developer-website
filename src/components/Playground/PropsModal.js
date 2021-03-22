import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Modal from './Modal';
import CodePreview from './CodePreview';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import CodeDef from '../CodeDef';
import formatCode from '../../utils/formatCode';
import PropItem from './PropItem';

const inBetween = (componentName) => new RegExp(`>([^<]*)</${componentName}`);

const PropsModal = ({ component, isOpen, onClose, onAdd }) => {
  const { name: componentName, usage, propTypes = [] } = component;
  const [liveCode, setLiveCode] = useState(
    `<${componentName}></${componentName}>`
  );
  const [selectedProps, setSelectedProps] = useState({});

  const handleOnCheck = (propItem) => {
    const newProps = selectedProps;
    if (newProps[propItem.name]) {
      delete newProps[propItem.name];
    } else {
      newProps[propItem.name] = propItem.value;
    }
    setLiveCode(formatCode(createCodeString(newProps)));
    setSelectedProps(newProps);
  };

  const handleOnChange = (propItem) => {
    const newProps = selectedProps;
    newProps[propItem.name] = propItem.value;
    setLiveCode(createCodeString(newProps));
    setSelectedProps(newProps);
  };

  const onCodeChange = (code) => {
    setLiveCode(code);
  };

  // prop: value
  const createCodeString = (selectedProps) => {
    const childMatch = liveCode.match(inBetween(componentName));
    const child = childMatch > 1 ? '' : childMatch[1];
    return `<${componentName}${Object.entries(selectedProps).reduce(
      (acc, [name, value]) => `${acc} ${name}={${value}}`,
      ''
    )}>${child}</${componentName}>`;
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{componentName}</h2>
      <CodeDef>{usage}</CodeDef>
      <CodePreview code={liveCode} onChange={(code) => onCodeChange(code)} />
      <h3
        css={css`
          margin-top: 1rem;
        `}
      >
        Available Props
      </h3>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 1rem 0.5rem;
          margin-top: 1rem;
        `}
      >
        {propTypes.map((prop) => (
          <PropItem
            key={`${componentName}-${prop.name}`}
            propItem={prop}
            onCheck={handleOnCheck}
            onChange={handleOnChange}
          />
        ))}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        `}
      >
        <Button
          variant={Button.VARIANT.NORMAL}
          type="button"
          onClick={() => onAdd(liveCode)}
          css={css`
            width: 8rem;
          `}
        >
          Add
        </Button>
      </div>
    </Modal>
  );
};

PropsModal.propTypes = {
  component: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAdd: PropTypes.func,
};

export default PropsModal;
