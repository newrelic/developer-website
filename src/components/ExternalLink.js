import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    className="ExternalLink"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
