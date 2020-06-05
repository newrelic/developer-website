import React from 'react';
import styles from './Step.module.scss';
import Proptypes from 'prop-types';

const Step = ({ children, number, total }) => {
  let codeSnippet = null;
  let childrenWithoutCodeSnippet = null;
  if (children.length) {
    codeSnippet = children.find((child) => child?.props?.mdxType === 'pre');
    childrenWithoutCodeSnippet = children.filter(
      (child) => child !== codeSnippet
    );
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.stepNumber}>{`Step ${number} of ${total}`}</p>
      <div className={styles.container}>
        <div
          className={`${styles.stepDetails} ${
            codeSnippet && styles.stepDetailsWithCode
          }`}
        >
          {childrenWithoutCodeSnippet || children}
        </div>
        {codeSnippet && codeSnippet}
      </div>
    </div>
  );
};

Step.propTypes = {
  children: Proptypes.node.isRequired,
  number: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
};

export default Step;
