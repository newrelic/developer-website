import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import MarketoForm from '../components/MarketoForm';
import SEO from '../components/Seo';
import nerdDays from '../images/nerd-days/nerd-days.png';
import styles from './nerd-days.module.scss';

const NerdDaysPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Nerd Days APJ" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumnAlt)}>
            <div>
              <img
                className={styles.img}
                src={nerdDays}
                alt="nerd days header"
              />
              <p>
                Nerd Days is a <b>FREE</b> engineering conference that kicks off
                October 22 <em>(Dates vary by region)</em>. Focused on building
                more perfect software, our goal is to spend less time looking at
                slides that tell you what software can do and more time on
                getting your hands on the software to solve problems
                efficiently.
              </p>
              <p>
                You’ll hear from fellow engineers who built New Relic solutions
                and New Relic users from various industries. Whether you’re new
                or a data nerd, there’s an interactive session for you.
              </p>
              <p>We look forward to building with you during Nerd Days! </p>
              <h2 className={styles.h2}>CALL FOR PROPOSALS</h2>
              <p>
                Got an interesting topic you want to share with your fellow
                engineers?{' '}
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe8LOilCrD_TCUPyHFHG_QzVW2UdUR0UKZ8H8WNylz0flB7OQ/viewform">
                  Submit your proposals
                </Link>{' '}
                by September 1, 2020 at 11:59 PM PT. For more details, check out
                the one-pager. Accepted proposals will be contacted by September
                30, 2020 at the latest.
              </p>
              <p>
                For an overview and tips for the call for proposals process,
                <a
                  href="https://resources.newrelic.com/nerd-days-call-for-proposals"
                  alt="cfp guide"
                >
                  {' '}
                  check out our guide.
                </a>
              </p>
            </div>
            <MarketoForm
              id={3525}
              title="REGISTER FOR NERD DAYS | APJ"
              munchkinId="412-MZS-894"
              publishableKey="pk_4d10daa544de6f993a9a9ce002ccd1c6"
            />
          </section>
          <section />
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default NerdDaysPage;
