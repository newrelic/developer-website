import React from 'react';
import styles from './Step.module.scss';
import Proptypes from 'prop-types';

const Step = ({ children, number, total }) => {
  const codeSnippet = children.find((child) => child?.props?.mdxType === 'pre');
  const childrenWithoutCodeSnippet = children.filter(
    (child) => child !== codeSnippet
  );
  return (
    <div className={styles.wrapper}>
      <p className={styles.stepNumber}>{`Step ${number} of ${total}`}</p>
      <div className={styles.container}>
        <div className={styles.stepDetails}>{childrenWithoutCodeSnippet}</div>
        {codeSnippet}
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
