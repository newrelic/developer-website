import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styles from './FunctionDefinition.module.scss';

const ParamDescription = ({ children, ...props }) => (
  <span {...props} className={styles.paramDescription}>
    {'//'} {children}
  </span>
);

ParamDescription.propTypes = {
  children: PropTypes.node,
};

const FunctionDefinition = ({ params, returnValue }) => {
  return (
    <div className={styles.container}>
      <span className={styles.keyword}>
        {params.length > 0 ? 'function (' : 'function ()'}
      </span>
      {params.map((param, i) => (
        <div key={i} className={styles.param}>
          <span className={styles.paramName}>{param.name}: </span>
          <span className={styles.type}>{param.type} </span>
          <Markdown
            source={param.description}
            renderers={{
              root: ParamDescription,
            }}
          />
        </div>
      ))}
      {params.length > 0 && <span className={styles.keyword}>)</span>}
      <span className={styles.keyword}> => </span>
      <span className={styles.type}>{returnValue.type}</span>
    </div>
  );
};

FunctionDefinition.propTypes = {
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
