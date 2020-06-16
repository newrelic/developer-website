import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CodeDef from './CodeDef';
import styles from './FunctionDefinition.module.scss';

const FunctionDefinition = ({ className, params, returnValue }) => {
  return (
    <CodeDef className={cx(styles.container, className)}>
      <CodeDef.Keyword>function</CodeDef.Keyword>{' '}
      <CodeDef.Bracket>{params.length > 0 ? '(' : '()'}</CodeDef.Bracket>
      {params.length > 0 && (
        <CodeDef.Block>
          {params.map((param, i) => (
            <div key={i}>
              <CodeDef.Identifier>
                {param.type.startsWith('...') ? `...${param.name}` : param.name}
                :{' '}
              </CodeDef.Identifier>
              <CodeDef.Type>{param.type}</CodeDef.Type>
              {i !== params.length - 1 ? ', ' : ' '}
              <CodeDef.Comment text={param.description} />
            </div>
          ))}
        </CodeDef.Block>
      )}
      {params.length > 0 && <CodeDef.Bracket>)</CodeDef.Bracket>}
      <CodeDef.Operator> => </CodeDef.Operator>
      <CodeDef.Type>{returnValue.type}</CodeDef.Type>
    </CodeDef>
  );
};

FunctionDefinition.propTypes = {
  className: PropTypes.string,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  returnValue: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default FunctionDefinition;
