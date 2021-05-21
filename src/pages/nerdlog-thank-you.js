import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import DevSiteSeo from '../components/DevSiteSeo';
import nerdlogBanner from '../images/nerdlog/nerdlog-banner.png';
import * as styles from './nerd-days.module.scss';

const NerdlogPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section>
            <div>
              <img
                className={styles.img}
                src={nerdlogBanner}
                alt="nerd days header"
              />
              <br />
              <br />
              <h1>Thank you for subscribing to Nerdlog emails!</h1>
              <p>
                You will now be notified when we have episodes of the Nerdlog
                and get information about previous episodes every week.
              </p>
              <p>
                To learn more about the latest features from the people who
                built them, check out our
                <a
                  href="https://blog.newrelic.com/tag/nerdlog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  weekly Nerdlog recaps.
                </a>
              </p>
            </div>
          </section>
          <section />
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

NerdlogPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NerdlogPage;
