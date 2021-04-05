import React, { useState } from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import HighlightedCode from './HighlightedCode';
import Editor from 'react-simple-code-editor';
import Markdown from '../Markdown';
import ToolTip from '../Tooltip';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const codeString = ({ items, name, code }) =>
  `[{${items
    .map(({ name: subName, value, type }) => {
      if (subName === name) {
        return `${subName}: ${code}`;
      }
      return `${subName}: ${value || typeMap[type] || ''}`;
    })
    .join(',')}}]`;

const buildStringFromType = ({ type, items }) => {
  if (type === 'collection') {
    return codeString({ items, name: undefined, code: '' });
  } else {
    return typeMap[type] || '';
  }
};

const VizPropInput = ({ onChange, inputProp }) => {
  const { title, description } = inputProp;

  return (
    <>
      <div
        css={css`
          grid-column: span 3;
          display: flex;
          flex-direction: row;
        `}
      >
        <h4
          css={css`
            margin-right: 0.5rem;
          `}
        >
          {title}
        </h4>
        {description && (
          <ToolTip.Wrapper>
            <Icon name="fe-info" size="1rem" />
            <ToolTip>
              <Markdown>{description}</Markdown>
            </ToolTip>
          </ToolTip.Wrapper>
        )}
      </div>

      <PropEditor inputProp={inputProp} onChange={onChange} />
    </>
  );
};

const PropEditor = ({ inputProp, onChange }) => {
  const { name, type, items = [] } = inputProp;
  const [code, setCode] = useState(buildStringFromType({ type, items }));
  return (
    <>
      <div>
        <code>{name}</code>
      </div>

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
          {type}
        </span>
      </div>
      <div
        css={css`
          background-color: var(--color-nord-0);
          padding: 0.25rem;
          margin-left: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 4px;
          height: 1.5rem;
        `}
      >
        <Editor
          value={code}
          highlight={(code) => <HighlightedCode>{code}</HighlightedCode>}
          onValueChange={(code) => {
            setCode(code);
            onChange({ name, code });
          }}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: '1rem',
          }}
        />
      </div>
    </>
  );
};

PropEditor.propTypes = {
  inputProp: PropTypes.object,
  onChange: PropTypes.func,
};

const CollectionInput = ({ inputProp, onChange }) => {
  const { title, name, items, type, description } = inputProp;

  const handleOnChange = ({ name, code }) => {
    const codeString = items
      .reduce((acc, { name: subName, value }) => {
        if (subName === name) {
          return `${acc} ${name}: ${code}`;
        }
        return `${acc} ${name}: ${value},`;
      }, '[{ ')
      .concat(' }]');
    onChange({ name, code: codeString });
  };
  return (
    <>
      <div
        css={css`
          grid-column: span 3;
        `}
      >
        <h4>{title}</h4>
      </div>
      {description && (
        <div
          css={css`
            grid-column: span 3;
          `}
        >
          <p>{description}</p>
        </div>
      )}
      <div>{name}</div>
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
          {type}
        </span>
      </div>
      <div />
      {items.map(({ name }) => (
        <PropEditor
          key={`${inputProp}:${name}`}
          name={name}
          onChange={handleOnChange}
          type="collection"
        />
      ))}
    </>
  );
};

CollectionInput.propTypes = {
  inputProp: PropTypes.object,
  onChange: PropTypes.func,
};

const typeMap = {
  string: `''`,
  number: '1',
  boolean: 'true',
  json: '{}',
  nrql: `'SELECT count(*) FROM Transaction'`,
};

// if the type is collection, take the items part of the list and create a

VizPropInput.propTypes = {
  onChange: PropTypes.func,
  inputProp: PropTypes.string,
};

export default VizPropInput;
