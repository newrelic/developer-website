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
              We rely on tracking instrumentation to deliver an optimal
              experience across our sites. If you consent to our cookies, please
              click “Yes".
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              className={styles.approveButton}
              variant={Button.VARIANT.PRIMARY}
              onClick={() => writeCookie(true)}
            >
              Yes
            </Button>
            <Button
              className={styles.rejectButton}
              variant={Button.VARIANT.NORMAL}
              onClick={() => writeCookie(false)}
            >
              No
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
