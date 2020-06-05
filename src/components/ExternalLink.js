import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, className, children }) => (
  <a
    href={href}
    target="_blank"
    className={className}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ExternalLink;
