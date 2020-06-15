import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './ConstantReference.module.scss';

const ConstantReference = ({ constant }) => {
  const { name, values, type } = constant;
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div>{type === 'array' ? '[' : '{'}</div>
      <div className={styles.constantContainer}>
        {values.map((value, i) => (
          <Markdown key={i} source={value} />
        ))}
      </div>
      <div>{type === 'array' ? ']' : '}'}</div>
    </div>
  );
};

ConstantReference.propTypes = {
  constant: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.array,
  }),
};

export default ConstantReference;
