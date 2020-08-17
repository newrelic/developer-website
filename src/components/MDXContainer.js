import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Step from './Step';
import Steps from './Steps';
import Caution from './Caution';
import Important from './Important';
import Tip from './Tip';
import Intro from './Intro';
import Iframe from './Iframe';
import { MDXCodeBlock, Video } from '@newrelic/gatsby-theme-newrelic';

import styles from './MDXContainer.module.scss';

const components = {
  Video,
  Step,
  Steps,
  Caution,
  Important,
  Tip,
  Intro,
  iframe: Iframe,
  code: MDXCodeBlock,
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
