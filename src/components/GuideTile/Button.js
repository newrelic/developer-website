import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import styles from './GuideTile.module.scss';
import { Link } from 'gatsby';

const GuideTileButton = ({ className, ...props }) => (
  <Button
    as={Link}
    variant={Button.VARIANT.PRIMARY}
    className={cx(styles.button, className)}
    {...props}
  />
);

GuideTileButton.propTypes = {
  className: PropTypes.string,
};

export default GuideTileButton;
