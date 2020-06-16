import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import styles from './ConstantReference.module.scss';

const ConstantReference = ({ constant }) => {
  const { name, values, type } = constant;

  return (
    <CodeDef className={styles.container}>
      <h3 className={styles.name}>
        <code>{name}</code>
      </h3>
      <CodeDef.Bracket>{type === 'array' ? '[' : '{'}</CodeDef.Bracket>
      <CodeDef.Block>
        {values.map((value, i) => (
          <Markdown key={i} source={value} />
        ))}
      </CodeDef.Block>
      <CodeDef.Bracket>{type === 'array' ? ']' : '}'}</CodeDef.Bracket>
    </CodeDef>
  );
};

ConstantReference.propTypes = {
  constant: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.any,
  }),
};

export default ConstantReference;
