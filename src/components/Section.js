import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ backgroundBanner, children, className }) => {
  return (
    <div className="Section">
      <div
        className={cx(
          { 'Section-backgroundBanner': backgroundBanner },
          className
        )}
      />
      {children}
    </div>
  );
};

Section.propTypes = {
  backgroundBanner: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
