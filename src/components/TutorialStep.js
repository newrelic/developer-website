import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import TutorialEditor from './TutorialEditor';
import Markdown from './Markdown';

const TutorialStep = ({
  children,
  codeBlock,
  project,
  stepNumber,
  title,
  totalSteps,
}) => {
  return (
    <div
      css={css`
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
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
      {project ? (
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, calc(50% - 0.5rem));
            grid-gap: 1rem;
          `}
        >
          <div>{children}</div>
          <TutorialEditor codeBlock={codeBlock} project={project} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

TutorialStep.propTypes = {
  children: PropTypes.node,
  codeBlock: PropTypes.object.isRequired,
  stepNumber: PropTypes.number.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  totalSteps: PropTypes.number.isRequired,
};

export default TutorialStep;
