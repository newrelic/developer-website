import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Iframe = (props) => {
  // strip out width and then render iframe
  // eslint-disable-next-line no-unused-vars
  const { width, title, ...limitedProps } = props;

  return (
    <iframe
      title={title}
      {...limitedProps}
      css={css`
        width: 100%;
      `}
    />
  );
};

Iframe.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
};

Iframe.defaultProps = {
  title: 'iFrame content',
};

export default Iframe;
