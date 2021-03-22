import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Modal from './Modal';
import Checkbox from '../Checkbox';
import Editor from 'react-simple-code-editor';
import Highlight from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Prism from 'prismjs';
import CodePreview from './CodePreview';
import ToolTip from '../Tooltip';
import { Icon, Button } from '@newrelic/gatsby-theme-newrelic';
import CodeDef from '../CodeDef';
import formatCode from '../../utils/formatCode';
import Markdown from '../Markdown';

const PropsModal = ({ component, isOpen, onClose, onAdd }) => {
  const { name: componentName, usage, propTypes } = component;
  const [liveCode, setLiveCode] = useState(
    `<${componentName}>Hello!</${componentName}>`
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

  // prop: value
  const createCodeString = (selectedProps) => {
    return `<${componentName}${Object.entries(selectedProps).reduce(
      (acc, [name, value]) => `${acc} ${name}={${value}}`,
      ''
    )}>Hello!</${componentName}>`;
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{componentName}</h2>
      <CodeDef>{usage}</CodeDef>
      <CodePreview code={liveCode} onChange={(code) => setLiveCode(code)} />
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

const PropItem = ({ propItem, onCheck, onChange }) => {
  const {
    name: propName,
    isRequired,
    defaultValue,
    type,
    description,
  } = propItem;
  const [checked, setChecked] = useState(isRequired);
  const [code, setCode] = useState(
    String(defaultValue ?? (DEFAULT_PROPS[type.raw] || null))
  );

  const onEditorChange = (code) => {
    setCode(code);
    if (checked) {
      onChange({ name: propName, value: code });
    }
  };

  const onCheckboxChange = () => {
    onCheck({ name: propName, value: code });
    setChecked(!checked);
  };

  return (
    <>
      <Checkbox
        label={propName}
        id={propName}
        checked={checked}
        onChange={onCheckboxChange}
      />
      <div>
        <span
          css={css`
            font-size: 12px;
            padding: 0.125rem;
            border-radius: 0.125rem;
            color: var(--color-green-500);
            background: var(--color-green-050);

            .dark-mode & {
              color: var(--color-green-600);
              background: var(--color-green-100);
            }
          `}
        >
          {type.raw}
        </span>
      </div>
      <ToolTip.Wrapper
        css={css`
          height: 1rem;
        `}
      >
        <Icon name="fe-info" />
        <ToolTip>
          <Markdown>{description}</Markdown>
        </ToolTip>
      </ToolTip.Wrapper>
      <div
        css={css`
          background-color: #011627;
          padding: 0.25rem;
          margin-left: 0.5rem;
          border-radius: 4px;
          height: 1.5rem;
        `}
      >
        <Editor
          value={code}
          highlight={(code) => <HighlightedCode>{code}</HighlightedCode>}
          onValueChange={onEditorChange}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: '1rem',
            width: '175px',
          }}
        />
      </div>
    </>
  );
};

const HighlightedCode = ({ children }) => (
  <Highlight Prism={Prism} code={children} language="javascript" theme={theme}>
    {({ tokens, getLineProps, getTokenProps }) => {
      return (
        <pre data-language="javascript">
          <code>
            {tokens.map((line, idx) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: idx })}>
                <div>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </code>
        </pre>
      );
    }}
  </Highlight>
);

const DEFAULT_PROPS = {
  func: '() => {}',
  number: '0',
  string: "''",
  arrayOf: '[]',
  bool: 'false',
  object: '{}',
};

HighlightedCode.propTypes = {
  children: PropTypes.node,
};

PropsModal.propTypes = {
  component: PropTypes.object,
  isOpen: PropTypes.bool,
};
PropItem.propTypes = {
  propItem: PropTypes.object,
  onChange: PropTypes.func,
};

export default PropsModal;
