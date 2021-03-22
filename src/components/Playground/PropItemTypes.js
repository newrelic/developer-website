import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { css } from '@emotion/core';
import { camelCase } from 'lodash';
import RawCode from './RawCode';

const PropItemType = ({ propItem, constants }) => {
  const matchedConstant = constants.find(({ name }) => {
    const constantName = camelCase(name.split('.')[1]);
    return constantName === propItem.name;
  });

  if (matchedConstant) {
    const { name, value } = matchedConstant;
    const code = Object.keys(JSON.parse(value)).reduce((acc, val) => {
      return `${acc}${name}.${val},\n`;
    }, `//Available Constants for <var>${propItem.name}</var> \n\n`);

    return (
      <div
        css={css`
          grid-column: span 4;
        `}
      >
        <RawCode language="json" code={code} />{' '}
      </div>
    );
  }
  return null;
};

const ConstantCheckbox = ({ constant, onSelect }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Checkbox
      label={constant}
      onChange={() => {
        onSelect(!isChecked);
        setChecked(!isChecked);
      }}
      css={css`
        label {
          font-size: 12px;
        }
      `}
      checked={isChecked}
      key={constant}
    />
  );
};

ConstantCheckbox.propTypes = {
  constant: PropTypes.object,
  onSelect: PropTypes.func,
};

PropItemType.propTypes = {
  propItem: PropTypes.object,
  constants: PropTypes.object,
};

export default PropItemType;
