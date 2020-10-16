import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { isMdxType } from '../utils/mdx';

const TutorialStep = ({ children, stepNumber, totalSteps }) => {
  children = Children.toArray(children);
  const title = isMdxType(children[0], 'h3') ? children[0] : null;

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
      {title && (
        <h3
          {...title.props}
          css={css`
            font-size: 1rem;
            font-weight: bold;
            margin-top: 0 !important;
          `}
        >
          {title.props.children}
        </h3>
      )}
      {children.filter((child) => child !== title)}
    </div>
  );
};

TutorialStep.propTypes = {
  children: PropTypes.node,
  stepNumber: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default TutorialStep;
