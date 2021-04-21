import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { isMdxType } from '../utils/mdx';

const TutorialSection = ({ children }) => {
  const totalSteps = Children.toArray(children).filter(
    (child) => isMdxType(child, 'TutorialStep') || isMdxType(child, 'Step')
  ).length;
  let step = 1;

  return (
    <section
      css={css`
        margin-bottom: 2rem;
      `}
    >
      {Children.map(children, (child) => {
        if (isMdxType(child, 'TutorialStep') || isMdxType(child, 'Step')) {
          return cloneElement(child, { stepNumber: step++, totalSteps });
        }

        return child;
      })}
    </section>
  );
};

TutorialSection.propTypes = {
  children: PropTypes.node,
};

export default TutorialSection;
