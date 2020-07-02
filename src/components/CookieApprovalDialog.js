import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Button from './Button';
import styles from './CookieApprovalDialog.module.scss';

const gdprConsentCookieName = 'newrelic-gdpr-consent';

const CookieApprovalDialog = ({ className }) => {
  const [isCookieSet, setIsCookieSet] = useState(true);

  useEffect(() => {
    setIsCookieSet(Cookies.get(gdprConsentCookieName) !== undefined);
  }, []);

  function writeCookie(answer) {
    const currentEnvironment =
      process.env.ENV || process.env.NODE_ENV || 'development';
    const options = { expires: 365 /* days */ };
    if (currentEnvironment !== 'development') {
      options.domain = 'newrelic.com';
    }

    Cookies.set(gdprConsentCookieName, String(!!answer), options);
    setIsCookieSet(true);
  }

  return (
    !isCookieSet && (
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
              analyze our website traffic. You consent to our cookies if you
              click “OK”.
            </p>
          </div>
          <div className={styles.ctaContainer}>
            <Button
              className={styles.approvalButton}
              variant={Button.VARIANT.PRIMARY}
              onClick={() => writeCookie(true)}
            >
              OK
            </Button>
            <Button
              className={`${styles.ignoreButton}`}
              variant={Button.VARIANT.NORMAL}
              onClick={() => writeCookie(false)}
            >
              Reject
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

CookieApprovalDialog.propTypes = {
  className: PropTypes.string,
};

export default CookieApprovalDialog;
