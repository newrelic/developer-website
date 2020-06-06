import React from 'react';
import PropTypes from 'prop-types';
import ComponentExample from './ComponentExample';
import FunctionDefinition from './FunctionDefinition';
import Markdown from 'react-markdown';
import styles from './MethodReference.module.scss';

const MethodReference = ({ className, method }) => (
  <div className={className}>
    <h3 className={styles.name}>{method.name}</h3>
    <Markdown className={styles.description} source={method.description} />
    <FunctionDefinition
      params={method.params}
      returnValue={method.returnValue}
    />
    {method.examples.map((example, i) => (
      <ComponentExample
        key={i}
        className={styles.componentExample}
        example={example}
      />
    ))}
  </div>
);

MethodReference.propTypes = {
  className: PropTypes.string,
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    params: FunctionDefinition.propTypes.params,
    returnValue: FunctionDefinition.propTypes.returnValue,
    examples: PropTypes.arrayOf(ComponentExample.propTypes.example),
  }),
};

export default MethodReference;
