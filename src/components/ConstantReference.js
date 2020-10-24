import React from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import JsonValue from './JsonValue';
import styles from './ConstantReference.module.scss';

const ConstantReference = ({ constant }) => {
  const { name, value } = constant;

  return (
    <CodeDef className={styles.container}>
      <h3 className={styles.name}>
        <code>{name}</code>
      </h3>
      <JsonValue value={value} />
    </CodeDef>
  );
};

ConstantReference.propTypes = {
  constant: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number,
      PropTypes.array,
    ]),
  }),
};

export default ConstantReference;
