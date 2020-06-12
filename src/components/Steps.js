import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { isMdxType } from '../utils/mdx';

const Steps = ({ children }) => {
  const totalSteps = Children.toArray(children).filter((child) =>
    isMdxType(child, 'Step')
  ).length;

  return Children.map(children, (child, index) =>
    cloneElement(child, { number: index + 1, total: totalSteps })
  );
};

Steps.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Steps;
