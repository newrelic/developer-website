import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import DevSiteSeo from '../components/DevSiteSeo';
import changelogBanner from '../images/changelog/changelog-banner.jpg';
import { css } from '@emotion/react';

const ChangelogPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section>
            <div>
              <img
                css={css`
                  width: 100%;
                  margin: 0.25rem auto;
                `}
                src={changelogBanner}
                alt="nerd days header"
              />
              <br />
              <br />
              <h1>Thank you for subscribing to Changelog emails!</h1>
              <p>
                You will now be notified when we have episodes of the Changelog
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
                  weekly Changelog recaps.
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

ChangelogPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ChangelogPage;
