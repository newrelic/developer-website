import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Markdown from '../Markdown';
import Checkbox from '../Checkbox';
import Editor from 'react-simple-code-editor';
import ToolTip from '../Tooltip';
import HighlightedCode from './HighlightedCode';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

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

const DEFAULT_PROPS = {
  func: '() => {}',
  number: '0',
  string: "''",
  arrayOf: '[]',
  bool: 'false',
  object: '{}',
};

PropItem.propTypes = {
  propItem: PropTypes.object,
  onChange: PropTypes.func,
  onCheck: PropTypes.func,
};

export default PropItem;
