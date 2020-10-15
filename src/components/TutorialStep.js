import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Markdown from './Markdown';

const TutorialStep = ({ children, stepNumber, title, totalSteps }) => {
  return (
    <div
      css={css`
        padding: 2rem 0;
        border-top: 1px solid var(--divider-color);
      `}
    >
      <p
        css={css`
          font-size: 0.75rem;
          color: var(--accent-text-color);
          margin-bottom: 0;
        `}
      >
        Step {stepNumber} of {totalSteps}
      </p>
      <h3
        css={css`
          font-size: 1rem;
          font-weight: bold;
          margin-top: 0 !important;
        `}
      >
        <Markdown source={title} />
      </h3>
      {children}
    </div>
  );
};

TutorialStep.propTypes = {
  children: PropTypes.node,
  stepNumber: PropTypes.number.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  totalSteps: PropTypes.number.isRequired,
};

export default TutorialStep;
