import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import styles from './ConstantReference.module.scss';

const Value = ({ value }) => {
  const type = typeof value;

  if (Array.isArray(value)) {
    return (
      <>
        <CodeDef.Bracket>[</CodeDef.Bracket>
        <CodeDef.Block>
          {value.map((item, idx) => (
            <div key={idx}>
              <Value value={item} />
              {idx !== value.length - 1 && ','}
            </div>
          ))}
        </CodeDef.Block>
        <CodeDef.Bracket>]</CodeDef.Bracket>
      </>
    );
  }

  if (value == null) {
    return <CodeDef.Keyword>{String(value)}</CodeDef.Keyword>;
  }

  console.log({ value, type });

  switch (type) {
    case 'object':
      return (
        <>
          <CodeDef.Bracket>{'{ '}</CodeDef.Bracket>
          <CodeDef.Block>
            {Object.entries(value).map(([key, value], idx, arr) => (
              <div key={key}>
                <CodeDef.Identifier>{key}: </CodeDef.Identifier>
                <Value value={value} />
                {idx !== arr.length - 1 && ', '}
              </div>
            ))}
          </CodeDef.Block>
          <CodeDef.Bracket>{' }'}</CodeDef.Bracket>
        </>
      );
    case 'string':
      return <CodeDef.String value={value} />;
    case 'number':
      return <CodeDef.Number value={value} />;
    default:
      return value;
  }
};

Value.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

const ConstantReference = ({ constant }) => {
  const { name, value } = constant;

  return (
    <CodeDef className={styles.container}>
      <h3 className={styles.name}>
        <code>{name}</code>
      </h3>
      <Value value={value} />
    </CodeDef>
  );
};

ConstantReference.propTypes = {
  constant: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }),
};

export default ConstantReference;
