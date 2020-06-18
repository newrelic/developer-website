import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.scss';

const Markdown = ({ className, ...props }) => (
  <ReactMarkdown className={cx(styles.container, className)} {...props} />
);

Markdown.propTypes = {
  className: PropTypes.string,
};

export default Markdown;
