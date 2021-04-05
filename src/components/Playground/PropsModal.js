import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Modal from './Modal';
import CodePreview from './CodePreview';
import { Collapser } from '@newrelic/gatsby-theme-newrelic';
import formatCode from '../../utils/formatCode';
import PropItem from './PropItem';
import Markdown from '../Markdown';
import ExampleEditor from './ExampleEditor';

const PropsModal = ({ component, isOpen, onClose, onAdd }) => {
  const {
    name: componentName,
    description,
    propTypes = [],
    examples = [],
  } = component;
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
    setLiveCode(formatCode(createCodeString(newProps), { language: 'jsx' }));
    setSelectedProps(newProps);
  };

  useEffect(() => {
    if (!isOpen) {
      setLiveCode(`<${componentName}></${componentName}>`);
    }
  }, [isOpen]);

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
    return `<${componentName}${Object.entries(selectedProps).reduce(
      (acc, [name, value]) =>
        name === 'children' ? acc : `${acc} ${name}={${value}}`,
      ''
    )}>${
      selectedProps.children ? `{${selectedProps.children}}` : ''
    }</${componentName}>`;
  };
  const showPreview = examples.some(({ preview }) => preview);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{componentName}</h2>
      <div
        css={css`
          font-size: 14px;
        `}
      >
        <Markdown>{description}</Markdown>
      </div>

      <h3
        css={css`
          margin-top: 1rem;
        `}
      >
        Available Props
      </h3>
      <CodePreview
        code={liveCode}
        onAdd={onAdd}
        onChange={(code) => onCodeChange(code)}
        showPreview={showPreview}
      />
      <div
        css={css`
          display: grid;
          grid-template-columns: auto auto auto 1fr;
          gap: 1rem 0.5rem;
          margin-top: 1rem;
        `}
      >
        {propTypes.map((prop) => (
          <PropItem
            key={`${componentName}-${prop.name}`}
            propItem={prop}
            component={component}
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
      />
      {examples.length > 0 && (
        <Collapser title="Examples">
          {examples.map(({ sourceCode, label, preview }) => {
            return (
              <div
                css={css`
                  margin-bottom: 1rem;
                `}
                key={`${componentName}-${label}`}
              >
                <h4>{label}</h4>

                <ExampleEditor
                  sourceCode={sourceCode}
                  onAdd={onAdd}
                  preview={preview}
                />
              </div>
            );
          })}
        </Collapser>
      )}
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
