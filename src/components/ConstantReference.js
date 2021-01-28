import React from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import JsonValue from './JsonValue';
import { graphql } from 'gatsby';

const ConstantReference = ({ className, constant }) => {
  const { name, value } = constant;

  return (
    <div className={className}>
      <h3>
        <code>{name}</code>
      </h3>
      <CodeDef>
        <JsonValue value={JSON.parse(value)} />
      </CodeDef>
    </div>
  );
};

ConstantReference.propTypes = {
  className: PropTypes.string,
  constant: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
  }),
};

export const query = graphql`
  fragment ConstantReference_constant on NewRelicSdkConstant {
    name
    value
  }
`;

export default ConstantReference;
