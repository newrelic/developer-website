import React from 'react';
import PropTypes from 'prop-types';
import ReferenceExample from './ReferenceExample';
import FunctionDefinition from './FunctionDefinition';
import Markdown from './Markdown';
import styles from './MethodReference.module.scss';
import { graphql } from 'gatsby';

const MethodReference = ({ className, method }) => (
  <div className={className}>
    <h3 className={styles.name}>{method.name}</h3>
    <Markdown className={styles.description} source={method.description} />
    <FunctionDefinition
      className={styles.functionDefinition}
      arguments={method.arguments}
      returnValue={method.returnValue}
    />
    {method.examples.map((example, i) => (
      <ReferenceExample key={i} className={styles.example} example={example} />
    ))}
  </div>
);

MethodReference.propTypes = {
  className: PropTypes.string,
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    arguments: FunctionDefinition.propTypes.params,
    returnValue: FunctionDefinition.propTypes.returnValue,
    examples: PropTypes.arrayOf(ReferenceExample.propTypes.example),
  }),
};

export const query = graphql`
  fragment MethodReference_method on NewRelicSdkMethod {
    name
    description
    examples {
      ...ReferenceExample_example
    }
    arguments {
      ...FunctionDefinition_arguments
    }
    returnValue {
      ...FunctionDefinition_returnValue
    }
  }
`;

export default MethodReference;
