import React from 'react';
import PropTypes from 'prop-types';

const Steps = ({ children }) => {
  // get the number of steps
  const totalSteps = children.filter(
    (child) => child?.props?.mdxType === 'Step'
  ).length;

  // return the children with additional props
  return (
    <>
      {children.map((child, index) => ({
        ...child,
        props: {
          ...child.props,
          number: index + 1,
          total: totalSteps,
        },
      }))}
    </>
  );
};

Steps.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Steps;
