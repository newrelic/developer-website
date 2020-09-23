import React from 'react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import SEO from '../components/Seo';
import nerdDays from '../images/nerd-days/nerd-days.png';
import styles from './nerd-days.module.scss';

const NerdDaysPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumnAlt)}>
            <div>
              <img
                className={styles.img}
                src={nerdDays}
                alt="nerd days header"
              />
              <h1>You’re registered for Nerd Days</h1>
              <p>
                Thanks again for signing up. Here’s some helpful information to
                know before you go. But first, don’t forget to add Nerd Days 1.0
                to your calendar at:{' '}
                <a href="https://try.newrelic.com/rs/412-MZS-894/31967/New+Relic+Nerd+Days.ics">
                  Outlook/iCal
                </a>{' '}
                <a href="https://get.newrelic.com/ep10FS01000ZM8000T3A00J">
                  Google Calendar
                </a>
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

export default NerdDaysPage;
