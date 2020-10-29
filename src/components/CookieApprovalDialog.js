import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';
import styles from './CookieApprovalDialog.module.scss';
import ExternalLink from './ExternalLink';

const gdprConsentCookieName = 'newrelic-gdpr-consent';

const CookieApprovalDialog = ({ className, setCookieConsent }) => {
  const [isCookieSet, setIsCookieSet] = useState(true);

  useEffect(() => {
    setIsCookieSet(Cookies.get(gdprConsentCookieName));
  }, []);

  const writeCookie = (answer) => {
    const currentEnvironment =
      process.env.ENV || process.env.NODE_ENV || 'development';
    const options = { expires: 365 /* days */ };
    if (currentEnvironment !== 'development') {
      options.domain = 'newrelic.com';
    }

    Cookies.set(gdprConsentCookieName, String(!!answer), options);
    setIsCookieSet(true);

    answer && setCookieConsent(true);
  };

  if (isCookieSet) {
    return null;
  }
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.content}>
        <div className={styles.primaryContent}>
          <h4 className={styles.heading}>
            This site uses cookies{' '}
            <span role="img" aria-label="Cookie emoji">
              🍪
            </span>
          </h4>
          <p className={styles.description}>
            We use cookies and other similar technologies ("Cookies") on our
            websites and services to enhance your experience and to provide you
            with relevant content. By using our websites and services you are
            agreeing to the use of cookies. You can read more{' '}
            <ExternalLink href="https://newrelic.com/termsandconditions/cookie-policy">
              here
            </ExternalLink>
            . If you consent to our cookies, please click <strong>Yes</strong>.
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
  );
};

CookieApprovalDialog.propTypes = {
  className: PropTypes.string,
  setCookieConsent: PropTypes.func,
};

export default CookieApprovalDialog;
