import React from 'react';
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
        <PageLayout.Header title="New Relic Nerd Days" />
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
                October 13 <em>(Dates vary by region)</em>. Focused on building
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
            </div>
            <MarketoForm
              id={3525}
              title="REGISTER FOR NERD DAYS | AMERICAS"
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
