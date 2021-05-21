import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import PageLayout from '../components/PageLayout';
import DevSiteSeo from '../components/DevSiteSeo';
import nerdDays from '../images/nerd-days/nerd-days.png';
import * as styles from './nerd-days.module.scss';

const NerdDaysPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section className={cx(styles.twoColumnAlt)}>
            <div>
              <img
                className={styles.img}
                src={nerdDays}
                alt="nerd days header"
              />
              <h1>You’re registered for Nerd Days</h1>
              <p>
                Thanks again for signing up. Here’s some helpful information to
                know before you go.
              </p>

              <h2>Create your Hopin account:</h2>
              <p>
                You’ll get an email from Hopin inviting you to create your
                account/profile for Nerd Days 1.0. Once you sign in, you’ll see:
              </p>

              <ul>
                <li>
                  <strong>The Stage</strong> where the keynotes will take place
                </li>
                <li>
                  <strong>Sessions</strong> where you can register for the
                  hands-on workshops, and get access to New Relic One.
                </li>
                <li>
                  <strong>Networking</strong> where you can connect 1:1 with
                  other attendees or our SMEs to ask questions, chat, and share
                  ideas.
                </li>
              </ul>
            </div>
          </section>
          <section />
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

NerdDaysPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NerdDaysPage;
