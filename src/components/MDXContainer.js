import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Intro from './Intro';
import Iframe from './Iframe';
import SDKPreview from './SDKPreview';
import Tutorial from './Tutorial';
import TutorialStep from './TutorialStep';
import TutorialSection from './TutorialSection';
import Project from './Project';
import {
  Callout,
  MDXCodeBlock,
  Table,
  Video,
} from '@newrelic/gatsby-theme-newrelic';

import styles from './MDXContainer.module.scss';

const SDKCodeBlock = (props) => (
  <MDXCodeBlock
    components={{ Preview: SDKPreview }}
    scope={window.__NR1_SDK__.default}
    {...props}
  />
);

const components = {
  Callout,
  Video,
  // Remove these when all step/steps components have been updated to the new
  // name
  Step: TutorialStep,
  Steps: TutorialSection,
  Project,
  Table,
  Tutorial,
  TutorialStep,
  TutorialSection,
  Intro,
  iframe: Iframe,
  code: SDKCodeBlock,
  pre: (props) => props.children,
};

const MDXContainer = ({ className, children }) => {
  return (
    <div className={cx(styles.container, className)}>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

MDXContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default MDXContainer;
