import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Video from './Video';
import Step from './Step';
import Steps from './Steps';
import Caution from './Caution';
import Important from './Important';
import Tip from './Tip';
import Intro from './Intro';
import CodeBlock from './CodeBlock';

import styles from './MDXContainer.module.scss';

/* eslint-disable react/prop-types */
const components = {
  Video,
  Step,
  Steps,
  Caution,
  Important,
  Tip,
  Intro,
  code: ({
    className,
    copy,
    lineNumbers,
    live,
    lineHighlight,
    preview,
    ...props
  }) => (
    <CodeBlock
      copy={copy !== 'false'}
      highlightedLines={lineHighlight}
      language={className?.replace('language-', '')}
      lineNumbers={lineNumbers === 'true'}
      live={live === 'true'}
      preview={preview === 'true'}
      scope={window.__NR1_SDK__.default}
      {...props}
    />
  ),
  pre: (props) => props.children,
};
/* eslint-enable react/prop-types */

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
