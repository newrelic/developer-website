import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './CookieApprovalDialog.module.scss';

const CookieApprovalDialog = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.content}>
        <div className={styles.primaryContent}>
          <h4 className={styles.heading}>
            This site uses cookies{' '}
            <span role="img" aria-label="Cookie emoji">
              🍪
            </span>
          </h4>
          <p className={styles.description}>
            We rely on cookies to play videos, remember your preferences, and
            analyze our website traffic. You consent to our cookies if you click
            “OK”.
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <Button
            className={`button ${styles.approvalButton}`}
            variant={Button.VARIANT.PRIMARY}
          >
            OK
          </Button>
          <Button
            className={`${styles.ignoreButton}`}
            variant={Button.VARIANT.NORMAL}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

CookieApprovalDialog.propTypes = {
  className: PropTypes.string,
};

export default CookieApprovalDialog;
