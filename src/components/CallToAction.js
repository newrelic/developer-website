import React from 'react';
import './CallToAction.scss';

const component = ({ text, children }) => {
  return (
    <div className="callToAction">
      <h3>{text}</h3>
      {children}
    </div>
  );
};

export default component;
