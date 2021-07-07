import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReferenceExample from './ReferenceExample';
import FunctionDefinition from './FunctionDefinition';
import Markdown from './Markdown';
import { graphql } from 'gatsby';
import { SdkContext } from './SdkContext';
import Spinner from './Spinner';

const MethodReference = ({ className, method }) => {
  const { loaded: sdkLoaded, error: sdkError } = useContext(SdkContext);

  return (
    <div className={className}>
      <h3>
        <code>{method.name}</code>
      </h3>
      <Markdown
        children={method.description}
        css={css`
          margin-bottom: 1rem;
        `}
      />
      <FunctionDefinition
        arguments={method.arguments}
        returnValue={method.returnValue}
        css={css`
          margin-bottom: 1rem;
        `}
      />

      {sdkLoaded &&
        method.examples.map((example, i) => (
          <ReferenceExample
            key={i}
            example={example}
            css={css`
              &:not(:last-child) {
                margin-bottom: 2rem;
              }
            `}
          />
        ))}
      {!sdkLoaded && !sdkError && <Spinner />}
      {sdkError && <div>There was a problem loading the example</div>}
    </div>
  );
};

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
