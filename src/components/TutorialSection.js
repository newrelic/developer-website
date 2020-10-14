import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TutorialSection = ({ children }) => {
  return (
    <section
      css={css`
        margin-bottom: 4rem;
      `}
    >
      {children}
    </section>
  );
};

TutorialSection.propTypes = {
  children: PropTypes.node,
};

export default TutorialSection;
