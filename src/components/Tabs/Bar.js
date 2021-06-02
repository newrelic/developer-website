import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Bar = ({ children }) => (
  <div
    role="tablist"
    css={css`
      display: flex;
      margin-bottom: 1em;
      overflow: scroll;
    `}
  >
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { ...child.props, index })
    )}
  </div>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
