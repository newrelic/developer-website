import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import Footer from '../components/Footer';
import GlobalHeader from '../components/GlobalHeader';
import MobileHeader from '../components/MobileHeader';
import Sidebar from '../components/Sidebar';
import CookieApprovalDialog from '../components/CookieApprovalDialog';
import styles from './MainLayout.module.scss';
import 'normalize.css';
import '../components/styles.scss';

const gaTrackingId = 'UA-3047412-33';
const gdprConsentCookieName = 'newrelic-gdpr-consent';

const MainLayout = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const consentValue = Cookies.get(gdprConsentCookieName) === 'true';
    consentValue && setCookieConsent(true);
  }, []);

  return (
    <div className={styles.layout}>
      <Helmet>
        {cookieConsent ? (
          <script>
            {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          
          ga('create', '${gaTrackingId}', 'auto');
          ga('set', 'anonymizeIp', true);
          ga('send', 'pageview');`}
          </script>
        ) : null}
      </Helmet>
      <GlobalHeader />
      <MobileHeader
        className={styles.hideOnDesktop}
        isOpen={isMobileNavOpen}
        toggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
      <div className={cx(styles.main, 'site-container')}>
        <Sidebar className={cx(styles.sidebar, styles.hideOnMobile)} />
        <div />
        <div
          className={cx(styles.contentContainer, {
            [styles.hideOnMobile]: isMobileNavOpen,
          })}
        >
          <main className={styles.content}>{children}</main>
          <Footer className={styles.footer} />
        </div>
      </div>
      <CookieApprovalDialog setCookieConsent={setCookieConsent} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
