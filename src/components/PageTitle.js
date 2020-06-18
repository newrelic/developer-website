import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './PageTitle.module.scss';

const PageTitle = ({ children, className }) => (
  <h1 className={cx(className, styles.pageTitle)}>{children}</h1>
);

PageTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageTitle;
